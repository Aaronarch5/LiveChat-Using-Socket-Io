import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

import { createRequire } from "module";
const require = createRequire(import.meta.url);
import crypto from 'crypto'
const fs = require('fs')
const app = express()

// Obtiene el nombre del archivo actual
const __filename = fileURLToPath(import.meta.url);
// Obtiene el directorio actual
const __dirname = path.dirname(__filename);


//Settings
app.set('port', process.env.PORT || 3000);

//Static File
app.use(express.static(path.join(__dirname,'public')));

//Start the server
const server=app.listen(app.get('port'),()=>{
  console.log('server on port', app.get('port'));
});


const SocketIO = require('socket.io');
const io = SocketIO(server);

//web sockets
io.on('connection',(socket)=>{
  console.log('new connection',socket.id);

  socket.on('chat:message',(data)=>{
    console.log(data);
  });
});


