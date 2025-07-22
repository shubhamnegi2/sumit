let max = 0;
let sum = 0;
let i = 1;
let paused = false;

function computeChunk() {
  if (paused) return;

  let limit = Math.min(i + 100000, max + 1);
  while (i < limit) {
    sum += i;
    i++;
  }

  self.postMessage({ type: 'progress', sum });

  if (i <= max) {
    setTimeout(computeChunk, 1); // Schedule next chunk
  } else {
    self.postMessage({ type: 'done', sum });
  }
}

self.onmessage = function(e) {
  const data = e.data;

  if (data.type === 'start') {
    max = data.max;
    sum = 0;
    i = 1;
    paused = false;
    computeChunk();
  }

  if (data.type === 'pause') {
    paused = true;
  }

  if (data.type === 'resume') {
    if (paused) {
      paused = false;
      computeChunk();
    }
  }
};
