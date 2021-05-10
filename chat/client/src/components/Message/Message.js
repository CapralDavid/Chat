import React from 'react';

import './Message.css';



//СДЕЛАТЬ CSS



let Message = ({ message: { text, user }, name }) => {
    let isSent = false;
    console.log("NAME ", name);

    const trimmName = name.trim().toLowerCase();

    console.log("text ", text);

    if(user === trimmName){
        console.log("issent TRUE");
        isSent = true;
    }

    return(
        isSent
        ? (
            <div className="msgContainer justifyEnd">
                <p className="sentMsg pr-10">{trimmName}</p>
                <div className="msgBox">
                    <p className="msgText colorWhite">{text}</p>
                </div>
            </div>
        )
        : (
            <div className="msgContainer justifyStart">
              <div className="msgBox">
                  <p className="msgText colorDark">{text}</p>
              </div>
              <p className="sentMsg pl-10">{user}</p>
            </div>
        )
    )

};


//pl-10 = padding left 10
//pr-10 = padding right 10


export default Message;