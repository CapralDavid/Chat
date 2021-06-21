import * as React from "react";
import * as ReactDom from "react-dom";

//когда есть эта строчка,то выдает ошибку
//SyntaxError: Support for the experimental syntax 'jsx' isn't 
//currently enabled (85:9):
// import { Chat } from "./Chat.js";



// const io = require('socket.io-client');

// beforeEach(done => {
//     firstSocket = io.connect('http://localhost:5000');
//     secondSocket = io.connect('http://localhost:5000');
  
//     firstSocket.emit('join', { name: 'test1', room: 'test1' }, () => {});
//     secondSocket.emit('join', { name: 'test2', room: 'test1' }, () => {});
  
//     secondSocket.on('roomData', data => {
//       roomData = data;
//       done();
//     });
//   });