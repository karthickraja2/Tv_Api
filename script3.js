document.querySelector("button").addEventListener("click", result);

var container = document.createElement("div");
container.className="container";

var row=document.createElement("div");
row.className="row";

async function result() {
    row.innerHTML=" ";
    try {
        var test = document.getElementById("text").value;
        var data = await fetch(`https://api.tvmaze.com/search/shows?q=${test}`);
        var res = await data.json();
        console.log(res[0].show.language);
        var col= document.createElement("div");
        col.className='col-lg-4';
        col.innerHTML=`<div class="card" style="width: 18rem;">
        <img class="card-img-top" src="${res[0].show.image.medium}" alt="Card image cap">
        <div class="card-body">
          <h3 class="card-title">${res[0].show.name}</h3>
          <p class="card-text"><b>Genre</b> : ${res[0].show.genres}</p>
          <p class="card-text"><b>Premiered</b> : ${res[0].show.premiered}</p>
          <p class="card-text"><b>Rating</b> : ${res[0].show.rating.average}</p>
          <p class="card-text"><b>Runtime</b> : ${res[0].show.averageRuntime}</p>
          <p class="card-text"><b>Show Schedule</b> : ${res[0].show.schedule.days},${res[0].show.schedule.time}</p>
          <p class="card-text"><b>Offical Site</b> : ${res[0].show.officialSite}</p>
          <p class="card-text"><b>Network</b> : ${res[0].show.network.name}</p>
          <p class="card-text"><b>Summary</b> : ${res[0].show.summary}</p>
        </div>
        </div>`;
        row.append(col);
        container.append(row);
        document.body.append(container);

    } catch (error) {
        console.log(error);
    }
}