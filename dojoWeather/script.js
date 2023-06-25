let cookie = document.querySelector('.cookie')
let ftemps = [75, 65, 80, 66, 69, 61, 78, 70]
let ctemps = [24, 18, 27, 19, 21, 16, 26, 21]
let temps = [document.querySelector('.today.high'), document.querySelector('.today.low'), document.querySelector('.tmr.high'), document.querySelector('.tmr.low'), document.querySelector('.fri.high'), document.querySelector('.fri.low'), document.querySelector('.sat.high'), document.querySelector('.sat.low'), ]

function chgPointer(element) {
    element.classList.add("chgPointer")
}

function stdPointer(element) {
    element.classList.remove("chgPointer")
}

function loading() {
    alert("Loading weather report...")
}

function convert(element) {
    for (let i=0; i<temps.length; i++) {
        if (element.value=="f") {
            temps[i].innerText=ftemps[i]
        } else {
            temps[i].innerText=ctemps[i]
        }
    }
}

function dismiss() {
    cookie.remove()
}