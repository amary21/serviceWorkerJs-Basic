import marvelData from '../data/data-marvel.js';
import dcData from '../data/data-dc.js';
import disneyData from '../data/data-disney.js';

const itemView = () =>{
    const marvelListElement = document.querySelector("#marvelList");
    const dcListElement = document.querySelector("#dcList");
    const disneyListElement = document.querySelector("#disneyList");

    if(marvelListElement != null){
        renderResult(marvelData, marvelListElement);
    }else if(dcListElement != null){
        renderResult(dcData, dcListElement);
    }else if(disneyListElement != null){
        renderResult(disneyData, disneyListElement);
    }

    function renderResult(results, itemListElement){
        itemListElement.setAttribute("class", "container item-list");
        results.forEach(data => {
            const {name, description, image} = data;

            const itemElement = document.createElement("div");
            itemElement.setAttribute("class", "movie");
            itemElement.innerHTML = `<img class="responsive-img" src="${image}" alt="${image - name}">
                <div class="movie-info">
                    <h2>${name}</h2>
                    <p>${description}</p>
                </div>`;

            itemListElement.appendChild(itemElement);
        });
    }
}

export default itemView;