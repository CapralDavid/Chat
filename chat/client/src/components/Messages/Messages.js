import React from 'react';

import './Messages.css';
import ScrollToBottom from  'react-scroll-to-bottom';

import Message from './Message/Message.js'

//СДЕЛАТЬ CSS




let Messages = ({ messages, name }) => (
    <ScrollToBottom className = "messages">
         {messages.map((message, i) => <div key={i}> <Message message={message} name={name}/> </div>)}

    </ScrollToBottom>
);

//{messages.map((message, i) => <div key={i}> <Message message={message} name={name}/> </div>)}
//заменил <Message /> на просто key и все избражается
//проблема в том что ?массив messages пустой?
//!!!!проверь файл message.js


// let Messages = ({messages, name }) => (
//     <ScrollToBottom>
//          {messages.map((message, i) => <div key={i}> <Message message={message} name={name}/> </div>)}

//     </ScrollToBottom>
// );




export default Messages;