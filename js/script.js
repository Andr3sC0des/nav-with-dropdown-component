const button = document.querySelectorAll(".list__anchor")

button.forEach((i) => {
    i.addEventListener("click", (e) => {
        let height = 0
        let dropdown = i.nextElementSibling
        if (i.lastElementChild.classList[0] == "list__arrow") {
            i.lastElementChild.classList.toggle("list__arrow--rotate")
        }
        if (dropdown.clientHeight == "0"){ //Si el tamaño actual es 0
            height = dropdown.scrollHeight // El alto se ajustara para que
            // no se desborde
        }
        dropdown.style.height = `${height}px` // Cambiando el alto actual
        e.preventDefault()
    })
})