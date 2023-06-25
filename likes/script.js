let likes = [9,12,9]
let countLikes = [document.querySelector("#count0"), document.querySelector("#count1"),document.querySelector("#count2")]

function addLike(postId) {
    likes[postId] +=1
    countLikes[postId].innerText = likes[postId] + " like(s)"
}