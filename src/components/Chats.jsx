import { doc, onSnapshot, or } from 'firebase/firestore';
import React, { useContext, useEffect, useState } from 'react'
import { db } from '../firebase';
import { AuthContext } from '../context/AuthContext';
import { ChatContext } from '../context/ChatContext';

const Chats = () => {
  let userChats = []
  let lastMessage = 0;

  const [chats, setChats] = useState({});

  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {

        setChats(doc.data());
      });
      return () => {
        unsub();
      }

    }

    currentUser.uid && getChats();
  }, [currentUser.uid]);

  Object.values(chats).map(data => {
    if (data.userInfo) {
      userChats.push(data.userInfo);

    }
  })

  Object.values(chats).map(data => {
    if (data.lastMessage) {
      userChats[lastMessage].lastMessage = data.lastMessage


    }
  })

  const handleSelect = (u) => {
    dispatch({ type: "CHANGE_USER", payload: u })
  }
  return (
    <div className='search'>

      {
        userChats.map(data => (
          <div className="userChat" key={data.displayName} onClick={() => {
            handleSelect(data)
          }}>
            <img src={data.photoURL} alt="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" />
            <div className="userChatInfo">
              <span>{data.displayName}</span>
              <p>{data.lastMessage.text}</p>
            </div>
          </div>)

        )
      }

    </div>
  )
}

export default Chats