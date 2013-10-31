onmessage = function expensive(e) {
  var ops = e.data, tenPct = ops/10, temp = 0;

  postMessage("STARTED AT:" + new Date().toLocaleTimeString());

  while(ops--) {
    temp += Math.random();
    if (ops % tenPct === 0) postMessage(ops + " ops left");
  }

  postMessage("DONE AT: " + new Date().toLocaleTimeString());
};
