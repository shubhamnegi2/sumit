self.onmessage = function(e) {
  let data = e.data;
  let result = 0;

  for (let i = 0; i <= data; i++) {
    result += i;
    self.postMessage(result);
  }
  self.postMessage(result);
}