let inArticles = window.location.pathname.includes("/articles/");

let navbarPath = inArticles
    ? "../components/navbar.html"
    : "components/navbar.html";


fetch(navbarPath)
.then(response => response.text())
.then(data => {

    document.querySelector("nav").innerHTML = data;


    let links = document.querySelectorAll("nav a");


    links.forEach(link => {

        let page = link.getAttribute("data-page");


        if(inArticles){

            link.href = "../" + page;

        }else{

            link.href = page;

        }

    });


});



/* ---------- SCROLL FADE ---------- */


document.addEventListener("DOMContentLoaded",()=>{


    let elements = document.querySelectorAll(".hero");


    elements.forEach(element=>{

        element.classList.add("fade-in");

    });



    let observer = new IntersectionObserver((entries)=>{


        entries.forEach(entry=>{


            if(entry.isIntersecting){

                entry.target.classList.add("visible");

            }


        });


    },{

        threshold:0.25

    });



    elements.forEach(element=>{

        observer.observe(element);

    });


});