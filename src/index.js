console.log('hi this works');

function onDocumentReady(callback) {
  if (document.readyState === 'complete') {
    callback();
  } else {
    document.addEventListener('readystatechange', (event) => {
      console.log(event);
      if (document.readyState !== 'complete') return;
      callback();
    });
  }
}

onDocumentReady(() => {
  if (!('serviceWorker' in navigator)) return;
  navigator.serviceWorker.register('sw.js');
});
