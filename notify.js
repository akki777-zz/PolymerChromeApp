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

