import React, { useContext, useEffect, useState } from 'react'
import Message from './Message'
import { ChatContext } from '../context/ChatContext'
import { doc, onSnapshot } from 'firebase/firestore'
import { db } from '../firebase'
import { AuthContext } from '../context/AuthContext'

const Messages = () => {
  const { currentUser } = useContext(AuthContext);

  const [messages, setMessages] = useState([])
  const { data } = useContext(ChatContext);
  console.log("messages", messages)
  console.log("currentUser", currentUser)

  useEffect(() => {
    const onSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages)
    })

    return () => {
      onSub();
    }
  }, [data.chatId]);

  return (
    <div className='messages'>
      {messages.map(message => (
        <div className={`message ${message.senderId === currentUser.uid && "owner"}`}>
          <div className="messageInfo">
            <img src={message.senderId === currentUser.uid ? currentUser.photoURL : data.user.photoURL} alt="" />
            <span>just now</span>
          </div>
          <div className="messageContent">
            <p>{message.text}</p>
            {message.img && <img src={message.img} alt="" />}
          </div>

        </div>
      ))}

      <h2>Hello We</h2>

    </div>
  )
}

export default Messages