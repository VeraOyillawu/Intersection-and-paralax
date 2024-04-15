document.addEventListener("DOMContentLoaded", checkScrollAnimation)
const paralaxImage = document.querySelector(".image")

function checkScrollAnimation(){
    window.addEventListener("scroll", () => {
        const scrollValue = window.scrollY
        const windowHeight = window.innerHeight
        paralaxImage.style.transform = `translateY(${scrollValue/1.2}px)`
    })
}
