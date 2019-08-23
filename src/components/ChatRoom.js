import React, { Component } from 'react';
import './ChatRoom.css';

export default class ChatRoom extends Component {
  constructor(props) {
    super(props);
    this.chatRoomWindowRef = React.createRef();
  }

  handleSendEvent = event => {
    const { detailChat, match, sendMsg } = this.props;
    const selectUserId = Number(match.params.userId);
    const msgList = detailChat.filter(msg => msg.user_id === selectUserId);
    const sendingText = this.chatRoomWindowRef.current.value;

    const newMsgData = [
      {
        id: msgList[msgList.length - 1].id + 1,
        user_id: selectUserId,
        created_at: new Date().toISOString(),
        text: sendingText,
        isMine: true
      }
    ];

    if (sendingText) {
      if (event === 'push' || event.key === 'Enter') {
        sendMsg(newMsgData);
        this.chatRoomWindowRef.current.value = '';
      }
    }
  };

  getDetailChatText = () => {
    const { chatList, detailChat, match, history } = this.props;
    let selectedUserId = +match.params.userId;

    const chatRoomUser = chatList.filter(user => user.id === selectedUserId)[0];
    const messageList = detailChat.filter(list => list.user_id === chatRoomUser.id);

    return (
      <div>
        <div className='chatroom-header'>
          <div className='back-btn'>
            <button onClick={history.goBack}>뒤로</button>
          </div>
          <div className='chatroom-user-name'>{chatRoomUser.userName}</div>
        </div>
        <div className='chat-box'>
          {messageList.map(msg => (
            <div key={msg.id}>
              {msg.isMine ? (
                <div className='my-msg-element'>
                  <div className='my-msg-created-at'>
                    {msg.created_at.slice(11, 16)}
                  </div>
                  <span className='my-msg'>{msg.text}</span>
                  <img
                    className='my-img'
                    src={`https://scontent-icn1-1.xx.fbcdn.net/v/t1.0-9/69325050_2367374296676211_3295794006998384640_o.jpg?_nc_cat=107&_nc_oc=AQnOJ9-H0Hvkb0H3euCmUOAFFq7zldYFeAh1282OLGKEzQSyxOpAHU5CJ81JfU5VZoM&_nc_ht=scontent-icn1-1.xx&oh=ba638d03c52c514ad2aaa6953ce4dee1&oe=5DD8D832`}
                    alt={chatRoomUser.id}
                  />
                </div>
              ) : (
                <div className='user-msg-element'>
                  <img
                    className='user-img'
                    src={chatRoomUser.userImage}
                    alt={chatRoomUser.id}
                  />
                  <span className='user-msg'>{msg.text}</span>
                  <div className='user-msg-created-at'>
                    {msg.created_at.slice(11, 16)}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className='sending-box'>
          <input
            className='send-msg-box'
            type='text'
            placeholder='Type something to send...'
            ref={this.chatRoomWindowRef}
            onKeyPress={this.handleSendEvent}
          />
          <button
            className='submit-btn'
            onClick={() => this.handleSendEvent('push')}
          >
            보내기
          </button>
        </div>
      </div>
    );
  };

  render() {
    return <div className='chat-room'>{this.getDetailChatText()}</div>;
  }
}
