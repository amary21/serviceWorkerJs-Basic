import home from '../scripts/views/view-home.js';
import itemView from './views/view-item.js';
import service from './service.js';

const main = () => {
    const elems = document.querySelectorAll(".sidenav");
    M.Sidenav.init(elems);
    loadNav();

    function loadNav(){
        const xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function(){
            if(this.readyState == 4){
                if(this.status !== 200) return;

                document.querySelectorAll(".topnav, .sidenav").forEach(elm => {
                    elm.innerHTML = xhttp.responseText;
                });

                document.querySelectorAll(".sidenav a, .topnav a").forEach(elm => {
                    elm.addEventListener("click", event => {

                        var sidenav = document.querySelector(".sidenav");
                        M.Sidenav.getInstance(sidenav).close();

                        page = event.target.getAttribute("href").substr(1);
                        loadPage(page);
                    });
                });
            }
        };  
        xhttp.open("GET", "nav.html", true)
        xhttp.send()
    }

    const parallax = document.querySelectorAll('.parallax');
    M.Parallax.init(parallax);

    let page = window.location.hash.substr(1);
    if (page == "") page = "home";
    loadPage(page);

    function loadPage(page){
        const xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function(){
            if(this.readyState == 4){
                const content = document.querySelector("#body-content");
                if(this.status === 200){
                    content.innerHTML = xhttp.responseText;
                    if (page == "home"){
                        home();
                        content.append = eval($('.parallax').parallax());                        
                    } else {
                        itemView();
                    }
                } else if (this.status == 404){
                    content.innerHTML = "<p>Halaman tidak ditemukan.</p>";
                } else {
                    content.innerHTML = "<p>Ups.. halaman tidak dapat diakses.</p>";
                }
            }
        };
        
        xhttp.open("GET", "pages/" + page + ".html", true)
        xhttp.send();
    }
    
    service();
}

export default main;