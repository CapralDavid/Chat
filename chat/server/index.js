const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app); 
// const { Server } = require("socket.io");
// const socketio = new Server(server);
const {addUser, removeUser, getUser, getUsersInRoom} = require('./user.js');

const socketio = require('socket.io')(server, {
    cors: {
        origin: '*',
      }
});   


const PORT = process.env.PORT || 5000;

const router = require('./router');
const { isObject } = require('util');



//const io = socketio(server); 
//const { Server } = require("socket.io");
//const io = new Server(server);
//

socketio.on('connection', (socket) => {
    console.log('User connected');
    

    socket.on('join', (msg, callback) => {  //({ name, room })  //(msg, callback)

        const { error, user } = addUser({ id: socket.id, name: msg.name, room: msg.room});
        //console.log("USER SAVED", user);

        if(error) return callback(error);
        console.log("joined ",user.room)
        

        socket.emit('messageAdmin', {user: 'admin', text:`${user.name}, welcome.Room: ${user.room}`});
        socket.broadcast.to(user.room).emit('message', { user:'admin', text:`${user.name} joined room ${user.room}`});
        
        console.log(msg.room, msg.name); 
        //callback();   //ндо ли его сюда писать?
        socket.join(user.room);
    });

    socket.on("messageSend", (msg, callback) =>{
        let user = getUser(socket.id);
        //TypeError: Cannot read property 'room' of undefined
        //когда без консол лога что ниже,выдает ошибку
        //когда с ним,ошибки нет,НО сообщение не показыв в чате
        //может быть getUser теперь не может найти юзера в списке?????

        //UPDATE вроде исправил.в input.js в onKeyPress в инпуте я убрал скобки с аргумента(event)
        //маразм какой то. а нет опять ошибка,я убрал скобки в event в OnChange.
        //что то я не выкупаю 
        //сообщения не видно,но когда их пишешь строка ввода опускается вниз,может scroll down не работает?
        console.log(user, "user, from server/index.js");
        socketio.to(user.room).emit('messageAdmin', { user: user.name, text: msg});//можно ли вместо socketio просто socket.если нет,то почему выше socket.broadcasr.to(room), а не socketio
        callback();
    });

    socket.on('disconnect', () => {
        let user = removeUser(socket.id);
        console.log('User left');
    })
});

app.use(router);

server.listen(PORT, () => console.log(`Server has started.Port = ${PORT}`));