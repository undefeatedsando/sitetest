  var div = document.createElement('iframe');
  //div.innerHTML = "<strong>Ура!</strong> Вы прочитали это важное сообщение.";
  div.src = "frame.html";
  div.sandbox = "allow-same-origin allow-scripts";
  document.body.appendChild(div);