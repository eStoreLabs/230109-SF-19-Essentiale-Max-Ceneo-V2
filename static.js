function reveal() {
    const reveals = document.querySelectorAll(".es-benefits__textCtn");
    console.log(reveals);
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("es-benefits__textCtnActive");
        } else {
        reveals[i].classList.remove("es-benefits__textCtnActive");
        }
    }
    }
window.addEventListener("scroll", reveal);