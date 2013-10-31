function log(msg) {
  var output = document.getElementById("output");
  output.innerHTML += (msg + "\n");
}

function expensive(ops) {
  var tenPct = ops/10, temp = 0;

  log("STARTED AT:" + new Date().toLocaleTimeString());

  while(ops--) {
    temp += Math.random();
    if (ops % tenPct === 0) { log(ops + " ops complete") }
  }

  log("DONE AT: " + new Date().toLocaleTimeString());
};

expensive(1000000000);
