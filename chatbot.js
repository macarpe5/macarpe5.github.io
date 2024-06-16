document.getElementById('sendBtn').addEventListener('click', function() {
    let userInput = document.getElementById('userInput').value;
    if (userInput.trim() === "") return;
    appendMessage(userInput, 'user');
    document.getElementById('userInput').value = '';
    getBotResponse(userInput);
});

function appendMessage(message, sender) {
    let messageDiv = document.createElement('div');
    messageDiv.classList.add('message', sender);
    messageDiv.textContent = message;
    document.getElementById('messages').appendChild(messageDiv);
    document.getElementById('messages').scrollTop = document.getElementById('messages').scrollHeight;
}

function getBotResponse(userInput) {
    let botResponse = generateResponse(userInput);
    setTimeout(() => {
        appendMessage(botResponse, 'bot');
    }, 500);
}

function generateResponse(input) {
    input = input.toLowerCase();
    if (input.includes('home insurance')) {
        return 'Home insurance provides coverage for your home and personal belongings in case of damage or theft.';
    } else if (input.includes('auto insurance')) {
        return 'Auto insurance covers damages to your vehicle and liability for any damages you may cause in an accident.';
    } else if (input.includes('quote')) {
        return 'You can get a quote by providing some details about your home or vehicle. Would you like to start the process?';
    } else if (input.includes('premium')) {
        return 'Insurance premiums are affected by factors such as your location, the value of your property, and your claims history.';
    } else if (input.includes('claim')) {
        return 'To file a claim, you need to contact your insurance provider and provide details about the incident.';
    } else {
        return 'I\'m sorry, I didn\'t understand that. Can you please rephrase your question or ask something else?';
    }
}