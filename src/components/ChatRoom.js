import React, { Component } from 'react';
import './ChatRoom.css';

export default class ChatRoom extends Component {
  componentDidMount() {
    this.props.selectUser();
  }

  getDetailChatText = () => {
    const { chatList, detailChat } = this.props;
    let selectedUserId = +this.props.match.params.userId; // 0 : 히여니

    const chatRoomUser = chatList.filter(user => user.id === selectedUserId)[0]; // 히여니 데이터
    const userMessages = detailChat.filter(message => {
      if (chatRoomUser.messages.includes(message.id)) {
        return message;
      }
    });

    return (
      <div>
        <div className='chatroom-header'>
          <div className='back-btn'>
            <button onClick={this.props.history.goBack}>뒤로</button>
          </div>
          <div className='chatroom-user-name'>{chatRoomUser.user_name}</div>
        </div>
        <div className='chat-box'>
          {userMessages.map(msg => (
            <div className='user-msg-element' key={msg.id}>
              <img src={chatRoomUser.user_image} alt={chatRoomUser.id} />
              <span className='user-msg'>{msg.text}</span>
              <div className='user-msg-created-at'>{msg.created_at}</div>
            </div>
          ))}
          <div className='sending-box'>
            <input />
            <button>보내기</button>
          </div>
        </div>
      </div>
    );
  };

  render() {
    return <div className='chat-room'>{this.getDetailChatText()}</div>;
  }
}
