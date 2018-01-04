function changeChatState (chatID = 0){
    var frames = document.querySelectorAll("iframe");
    frames[0].style.display = "block";
    frames[1].style.display = "none";
}

function appendClose(){
    var closebutton = document.getElementById("endChat");
    closebutton.addEventListener("click", closeChat, false);
    console.log(closebutton);
}

function closeChat(){
    var frames = document.querySelectorAll("iframe");
    frames[0].style.display = "none";
    frames[1].style.display = "none";
}

setTimeout(appendClose, 500);
appendClose();
appendClose();

setTimeout(changeChatState, 500);