var state = document.querySelector("h5");
var addFriend = document.querySelector("#add");
var removeFriend = document.querySelector("#remove");

addFriend.addEventListener("click",function(){
    state.innerHTML = "Friend"
    state.style.color = "green"
})

removeFriend.addEventListener("click",function(){
    state.innerHTML = "Stranger"
    state.style.color = "red"
})