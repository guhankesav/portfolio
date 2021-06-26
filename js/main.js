let mybutton; window.addEventListener("load", () => {
    let hours = new Date().getHours(); if (hours <= 7 || hours >= 19) { document.querySelector("#switch").checked = true; setTheme("dark"); }
    document.querySelector("#switch").addEventListener("click", e => { if (e.target.checked) setTheme("dark"); else setTheme("light"); }); $(".navbar-nav>li>a").on("click", () => { $(".navbar-collapse").collapse("hide"); }); mybutton = document.getElementById("myBtn"); window.addEventListener("scroll", scrollFunction); new Typed(".typing", { strings: ["Machine-Learning Enthusiast", "Software Engineer", "Automation Scripter", "Figma designer", "Competitive Coder", "Android Application Dev", "UI Designer", "Front end Developer"], loop: true, typeSpeed: 35, backSpeed: 30 });
}); function setTheme(theme) { if (theme == "light") document.body.classList.remove("dark"); else if (theme == "dark") document.body.classList.add("dark"); }
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)
        mybutton.style.display = "block"; else mybutton.style.display = "none";
}
function topFunction() { document.body.scrollTop = 0; document.documentElement.scrollTop = 0; }