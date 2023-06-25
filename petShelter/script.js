let petCount = [3, 5, 8]
let pet;

function donate(element) {
    element.remove()
}

function animaltype(option) {
    alert('You are looking for a ' + option.value)
}

function countPets(petId) {
    petCount[petId] +=1
    pet = document.querySelector('#petcount'+ (petId + 1))
    pet.innerText = petCount[petId] + ' petting(s)'
}