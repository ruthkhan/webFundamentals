function pizzaOven(crustType, sauceType, cheeses, toppings) {
    let pizza = {}
    pizza.crustType = crustType
    pizza.sauceType = sauceType
    pizza.cheeses = cheeses
    pizza.toppings = toppings
    return pizza
}

let pizza1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"])
console.log(pizza1)
let pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"])
console.log(pizza2)
let pizza3 = pizzaOven("thin crust", "pesto", ["blue"], ["pear", "walnuts", "arugula"])
console.log(pizza3)
let pizza4 = pizzaOven("cauliflower keto", "cream", ["brie", "camembert"], ["bacon", "broccoli"])
console.log(pizza4)

let ingredients = {
    crusts: ["deep dish", "hand tossed", "thin crust", "cauliflower keto"],
    sauces: ["traditional", "marinara", "pesto", "cream"],
    cheeses: ["mozzarella", "feta", "blue", "brie", "camembert", "parmesan"], 
    toppings: ["pepperoni", "sausage", "mushrooms", "olives", "onions", "pear", "walnuts", "arugula", "bacon", "broccoli", "spinach", "pumpkin", "shrimp", "asparagus", "egg", "pineapple", "ham", "prosciutto"]
}

function randomPizza() {
    let pizza = {} 
    let numCheeses = Math.min(Math.ceil(ingredients.cheeses.length*Math.random()), 2)
    let numToppings = Math.min(Math.ceil(ingredients.toppings.length*Math.random()), 5)

    pizza.crustType = ingredients.crusts[Math.floor(ingredients.crusts.length*Math.random())]
    pizza.sauceType = ingredients.sauces[Math.floor(ingredients.sauces.length*Math.random())]
    pizza.cheeses=[]
    pizza.toppings=[]

    for (let i=0; i<numCheeses; i++) {
        pizza.cheeses.push(ingredients.cheeses[Math.floor(ingredients.cheeses.length*Math.random())])
    }
    for (let i=0; i<numToppings; i++) {
        pizza.toppings.push(ingredients.toppings[Math.floor(ingredients.toppings.length*Math.random())])
    }

    return pizza
}
console.log(randomPizza())