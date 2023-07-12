function showGreeting() {
    var name = prompt("Введите ваше имя:");
    if (name !== null && name !== "") {
        var greetingOutput = document.createElement("p");
        greetingOutput.textContent = "Привет, " + name + "!";
        document.body.appendChild(greetingOutput);
    }
  }
  
  function sendMessage() {
    var messageInput = document.getElementById("messageInput");
    var nameInput = document.getElementById("nameInput");
    var chatLog = document.getElementById("chatLog");
    var message = messageInput.value;
    var name = nameInput.value;
    
    if (message !== "") {
        var formattedMessage = name + ": " + message;
        console.log(formattedMessage);
        
        var messageElement = document.createElement("p");
        messageElement.textContent = formattedMessage;
        chatLog.appendChild(messageElement);
    }
    
    messageInput.value = "";
  }