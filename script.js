const cards = document.querySelectorAll(".card")

const observer = new IntersectionObserver( (entries) => {
    entries.forEach(cardEntry => {
        if (cardEntry.isIntersecting) {

            const delayTimer = cardEntry.target.getAttribute("data-timer")
            const setDelaytimer = setTimeout(() => {
                cardEntry.target.classList.add("show")
                clearTimeout(setDelaytimer)
            }, parseInt(delayTimer))
            
            cardEntry.target.classList.add("show")
        } else{
            cardEntry.target.classList.remove("show")
        }
    });
})

cards.forEach( (card)=> {
    observer.observe(card)
}) 