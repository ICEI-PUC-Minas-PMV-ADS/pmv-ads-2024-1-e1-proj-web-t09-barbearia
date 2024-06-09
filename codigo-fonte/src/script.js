document.addEventListener("DOMContentLoaded", function() {
  
  const savedData = JSON.parse(localStorage.getItem("formData")) || {};
  document.getElementById("name").value = savedData.name || "";
  document.getElementById("email").value = savedData.email || "";
  document.getElementById("message").value = savedData.message || "";

  
  document.getElementById("sendMessage").addEventListener("click", function() {
    
    const formData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value
    };

    
    localStorage.setItem("formData", JSON.stringify(formData));

    
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";

    
    window.open("https://chat.whatsapp.com/JK3tCm896Um0sHtYupY2Kc", "_blank");
  });
});