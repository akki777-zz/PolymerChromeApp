var tabs = document.querySelector('paper-tabs');
var pages = document.querySelector('core-animated-pages');

tabs.addEventListener('core-select',function(){
  pages.selected = tabs.selected;
});

document.addEventListener('polymer-ready', function() {
        var box = document.getElementById('second');
        box.addEventListener('shadow-z-changed', function() {
          console.log('height='+box.z);
        });
        box.addEventListener('color-changed', function() {
          console.log('color='+box.hex);
        });
});

document.getElementById("paper-fab-notify").addEventListener("click", function(){

              if (!Notification) {
                alert('Please us a modern version of Chrome, Firefox, Opera or Firefox.');
                return;
              }
            
              if (Notification.permission !== "granted")
                Notification.requestPermission();
            
              var notification = new Notification('Notification title', {
                icon: 'chat128.png',
                body: "Update Unlimited is awesome.",
              });
            
            
              notification.onclick = function (){
                window.open("http://updateunlimited.blogspot.in");
              };
});

