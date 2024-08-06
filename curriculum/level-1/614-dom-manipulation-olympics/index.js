window.onload = function() {
    var headerContainer = document.querySelector('#header');
    
    var header = document.createElement('h1');
    var text1 = document.createTextNode('JavaScript made this!! ');
    var text2 = 'Austin Jansen wrote the JavaScript';
    
    var span1 = document.createElement('span');
    span1.style.color = 'gold';
    var span2 = document.createElement('span');
    span2.style.color = 'black'; 
    
    var words = text2.split(' ');
    span1.textContent = words[0] + ' ' + words[1];
    span2.textContent = words.slice(2).join(' ');
    
    header.appendChild(text1);
    header.appendChild(document.createElement('br'));
    header.appendChild(span1);
    header.appendChild(document.createTextNode(' '));
    header.appendChild(span2);
    
    header.style.textAlign = 'center';
    
    headerContainer.appendChild(header);
}

let messagesLeftChanged = document.querySelectorAll(".message.left");

messagesLeftChanged[0].textContent = 'Hey, how are you?';
messagesLeftChanged[1].textContent = "I am good as well, thank you for asking";

let messagesRightChanged = document.querySelectorAll(".message.right");

messagesRightChanged[0].textContent = 'I am good, how about you?';
messagesRightChanged[1].textContent = "I am glad to hear that";

document.querySelector('#clear-button').addEventListener('click', function() {
    let messages = document.querySelectorAll('.messages');
    messages.forEach(function(message){
        message.textContent = '';
    });
});


