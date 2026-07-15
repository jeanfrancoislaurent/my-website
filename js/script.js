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

        if (inArticles) {
            link.href = "../" + page;
        } else {
            link.href = page;
        }

    });

});