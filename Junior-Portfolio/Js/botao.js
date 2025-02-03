const topButton = document.getElementById("top");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) { 
        topButton.classList.add("show-top");
    } else {
        topButton.classList.remove("show-top");
    }
});

topButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth" 
    });
});