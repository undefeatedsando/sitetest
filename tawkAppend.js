function changeChatState (chatID = 0){
    var frames = document.querySelectorAll("iframe");
    frames[0].style.display = "block";
    frames[1].style.display = "none";
}

setTimeout(changeChatState, 10);
