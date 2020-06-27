import homeData from '../data/data-home.js';

const home = ()=>{
    const homeListElement = document.querySelector("#homeList");
    renderResultHome(homeData);

    function renderResultHome(results){  
        results.forEach(home => {
            const {name, description, image} = home;

            const imageElement = document.createElement("div");
            imageElement.setAttribute("class", "parallax-container");
            imageElement.innerHTML = `<div class="parallax">
                <img src="${image}">
                </div>`;

            const valueElement = document.createElement("div");
            valueElement.setAttribute("class","section");
            valueElement.innerHTML = `<div class="row container">
                <h2 class="center white-text">${name}</h2>
                <p class="light blue-text text-lighten-5">${description}</p>
                </div>`;

            homeListElement.appendChild(imageElement);
            homeListElement.appendChild(valueElement);
        });
    }

}

export default home;