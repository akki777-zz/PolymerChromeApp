chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('window.html', {
    'bounds' : {
        'height' : 1000,
        'width' : 600
      }
  });
});