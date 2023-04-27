import React, { useContext } from 'react'
import Cam from '../img/cam.png'
import Add from '../img/add.png'
import More from '../img/more.png'
import Message from './Message'

import TextMessage from './TextMessage'
import Messages from './Messages'
import { ChatContext } from '../context/ChatContext'


const Chat = () => {

  const { data } = useContext(ChatContext)
  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
          <img src={Add} alt="" />
          <img src={Cam} alt="" />
          <img src={More} alt="" />
        </div>
      </div>

      <Messages />
      <TextMessage />
    </div>
  )
}

export default Chat