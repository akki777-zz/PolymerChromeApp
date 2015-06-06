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
            
              var notification = new Notification('Update Unlimited Blog', {
                icon: 'assets/app128.png',
                body: "Check it out !! Click this notification.",
              });
            
            
              notification.onclick = function (){
                window.open("http://updateunlimited.blogspot.in");
              };
});

//share paper-toast
document.getElementById('share').addEventListener("click",function(){
  document.querySelector('#toast').toggle();
});
