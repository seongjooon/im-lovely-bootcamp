import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = ({ chatList, curDetailChat }) => {
  let lastMsgList;

  if (curDetailChat) {
    lastMsgList = chatList.reduce((acc, cur) => {
      const message = curDetailChat.filter(user => cur.id === user.user_id);
      const lastMsg = message[message.length - 1];

      if (lastMsg) {
        acc[lastMsg.user_id] = {
          text: lastMsg.text,
          created_at: lastMsg.created_at
        };
      }

      return acc;
    }, {});
  }

  const lastChatList = chatList.map(element => {
    return {
      id: element.id,
      userName: element.userName,
      userImage: element.userImage,
      created_at: lastMsgList[element.id]
        ? lastMsgList[element.id].created_at
        : element.created_at,
      text: lastMsgList[element.id] ? lastMsgList[element.id].text : element.text
    };
  });

  const newestList = lastChatList.sort((a, b) => {
    return new Date(b.created_at) - new Date(a.created_at);
  });

  return (
    <div>
      <header>
        <div className='header-text'>CHAT</div>
      </header>
      <div className='chat-list'>
        {newestList.map(chatEl => (
          <Link to={`/chat_room/${chatEl.id}`} key={chatEl.id}>
            <div className='chat-element' key={chatEl.id}>
              <img src={chatEl.userImage} alt={chatEl.id} />
              <div className='chat-element-right-box'>
                <div className='last-msg-time'>
                  {chatEl.created_at.slice(11, 16)}
                </div>
                <div className='user-name'>{chatEl.userName}</div>
                <div className='user-text'>
                  {chatEl.text}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
