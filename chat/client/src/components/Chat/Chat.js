import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import './Chat.css';

import Infobar from '../Infobar/Infobar.js';
import Input from '../Input/Input.js';
import Messages from '../Messages/Messages.js';
let socket;  //используем io


//СДЕЛАТЬ CSS (/chat/chat.css)
//import './Chat.css';

const Chat = ({location}) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);  
    const ENDPOINT = 'http://localhost:5000'; //'localhost:5000'  '5000


    useEffect(() =>{
        const {name, room} = queryString.parse(location.search);

        socket = io(ENDPOINT); //(ENDPOINT) раньше так было
        socket.on("connect", () => {
           
            console.log("CONNECTED");

        });

        socket.emit('join', { name, room }, ({error}) =>{

        });



        
        setName(name);
        setRoom(room);
        console.log(name, room, "YO");
        console.log(socket, "YO ITS SOCKET");

        return () =>{
            //socket.emit('disconnect');//не могу исп.пишет Error: "disconnect" is a reserved event name.почему не могу хз
            //пишет user left только когда перезапускаю страницу,а не когда иду назад на вкладку
            socket.off();
        }


        
    }, [ENDPOINT, location.search]);


    useEffect(() => {

        
        socket.on("messageAdmin", (message) => {                                            //(msg) =>{}
            setMessages([...messages, message]);   //setMessages([...messages, message]);  //(msg => [...messages, message]);  
            
        });

        //!!!!!!!!!!!! НАШЕЛ ОШИБКУ !!!!!!!!!!в аргументе был msg, а анадо было message, что бы в setmessages в аргумент всунуть сообщение


    }, [messages]); //, message браузер жалуется что там нет аргумента.но что есть он или нет,не вижу изменений  // [messages]);

    //НЕЗАБУДЬ нужна функция для отправки сообщения (sendMessage)
    
    //ПРОБЛЕМАили нет?
    //при console.log("message, messages", message, messages); не показывается последнее отправленное сообщение,и еще сообщение от админ(а должно ли оно?)
    const sendMessage = (event) =>{
        event.preventDefault();
        if(message){
            socket.emit('messageSend', message, () => setMessage(''));  //=> setMessage('')
        }

    };
    console.log("message, messages", messages);  // , message, messages);

    //НУЖНО СДЕЛАТЬ CSS

    return(
        <div className="outerContainer">
            <div className="container">
                <Infobar room={ room }/>
                <Messages messages={ messages } name={ name }/>
                <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
                
            </div>
        </div>
    )
}

/*  //это было после Infobar
<input 
                value={message} 
                onChange={(event) => setMessage(event.target.value)}
                onKeyPress={(event => event.key == 'Enter'? sendMessage(event) : null)} /> 
*/
export default Chat;