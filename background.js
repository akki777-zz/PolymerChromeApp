chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('window.html', {
    'innerBounds' : {
        'minWidth': 500,
        'minHeight': 600,
        'height' : 1000,
        'width' : 600
      }
  });
});