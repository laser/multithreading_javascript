var worker = new Worker("ww_worker.js");
var output = document.getElementById("output");

var log = function(e) {
  output.innerHTML += (e.data.toString() + "\n");
};

worker.addEventListener("message", log, false);
worker.postMessage(1000000000);
