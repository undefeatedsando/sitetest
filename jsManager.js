var funcArr = ["tawk.js", "append.js", "log.js", "tawkAppend.js"];

function manageScripts(arr = funcArr){
    for (var i=0; i<arr.length; i++){
        addScript(arr[i]);
    }
}

function addScript(src){
  var script = document.createElement('script');
  script.src = src;
  script.async = false; // чтобы гарантировать порядок
  document.body.appendChild(script);
}