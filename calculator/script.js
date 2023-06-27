var displayDiv = document.querySelector("#display");
var currentNo = ""
var number1 = 0
var operator1 = ""

function press(digit) {
    currentNo = currentNo + digit
    if (currentNo.length<=10) {
        displayDiv.innerText = currentNo
    } else {
        console.log(currentNo.length)
        displayDiv.innerText = currentNo.slice(0,10) + "..."
    }
}

function setOP(symbol) {
    if (number1===0) {
        number1 = Number(currentNo)
    } else {
        calculate()
    }
    operator1 = symbol
    currentNo = ""
}

function calculate() {
    number2 = Number(currentNo)
    currentNo = ""
    if (operator1==="+") {
        answer = number1 + number2
    } else if (operator1==='-') {
        answer = number1 - number2
    } else if (operator1==='*') {
        answer = number1*number2
    } else if (operator1==='/') {
        answer = number1/number2
    } else {
        answer = 0
    }

    if (answer.toString().length<=10) {
        displayDiv.innerText = answer
    } else {
        displayDiv.innerText = answer.toString().slice(0,10) + "..."
    }
    number1 = answer
}

function clr() {
    number1 = 0
    currentNo = ""
    displayDiv.innerText = number1
}