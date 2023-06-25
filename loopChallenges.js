function printOdds() {
    for (let i=1; i<=20; i++) {
        if (i%2 !== 0) {
            console.log(i)
        }
    }
}

function multiples() {
    for (let i=100; i>=0; i--) {
        if (i%3 === 0) {
            console.log(i)
        }
    }
}

function sequence(seq) {
    for (let i=0; i<seq.length; i++) {
        console.log(seq[i])
    }
}

function sigma() {
    let sum = 0; 
    for (let i=1; i<=100; i++) {
        sum +=i 
    }
    console.log(sum)
}

function factorial() {
    let product = 1; 
    for (let i=2; i<=12; i++) {
        product *=i 
    }
    console.log (product)
}

let seq = [4, 2.5, 1, -0.5, -2, -3.5]

printOdds()
multiples()
sequence(seq)
sigma()
factorial()