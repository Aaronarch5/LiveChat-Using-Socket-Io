const socket = io();
//Dom Elements
let message = document.getElementById('message');
let username = document.getElementById('username');
let button = document.getElementById('send');
let output = document.getElementById('output');
let actions = document.getElementById('action');

button.addEventListener('click',function(){
    socket.emit('chat:message',{
        username: username.value,
        message: message.value
    });
    console.log();
});
message.addEventListener('keypress',function(){
    socket.emit('chat:typing',username.value);
});
socket.on('chat:message', function(data){
    actions.innerHTML =" ";
    output.innerHTML += `<p><strong>${data.username}</strong>: ${data.message}</p>`;
});
socket.on('chat:typing', function(dato){
    actions.innerHTML += `<p><em>${dato}</em>: esta escribiendo un mensaje</p>`;

});