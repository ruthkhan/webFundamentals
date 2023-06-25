let profile = document.querySelector("h1.profile")
let names = ["Doris Day", "Marie Curie", "Lady Macbeth"]
let selectedName
let requestor
let requests = 2
let requestNum = document.querySelector("#requestnum")
let accept = 418
let acceptNum = document.querySelector('#acceptnum')

function chgName() {
    selectedName=names[Math.round(2*Math.random())]
    profile.innerText = selectedName
}

function clearReq(requestId, acceptBool) {
    requestor = document.querySelector(requestId)
    requestor.remove()
    requests -=1
    requestNum.innerText = requests
    if (acceptBool == true) {
        accept +=1
        acceptNum.innerText = accept
    }
}