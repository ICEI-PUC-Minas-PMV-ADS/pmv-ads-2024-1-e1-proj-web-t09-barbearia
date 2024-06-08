document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
  
    
    const savedName = localStorage.getItem('name');
    const savedEmail = localStorage.getItem('email');
    const savedMessage = localStorage.getItem('message');
    if (savedName) document.getElementById('name').value = savedName;
    if (savedEmail) document.getElementById('email').value = savedEmail;
    if (savedMessage) document.getElementById('message').value = savedMessage;
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
    });
  
    const sendMessageButton = document.getElementById('sendMessage');
  
    sendMessageButton.addEventListener('click', function() {
      
      localStorage.setItem('name', document.getElementById('name').value);
      localStorage.setItem('email', document.getElementById('email').value);
      localStorage.setItem('message', document.getElementById('message').value);
  
      
      window.open("https://chat.whatsapp.com/JK3tCm896Um0sHtYupY2Kc", "_blank");
    });
  });