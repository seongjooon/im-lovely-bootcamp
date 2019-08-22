import React, { Component } from 'react';
import './ChatRoom.css';

export default class ChatRoom extends Component {
  constructor(props) {
    super(props);
    this.state = { value: {} };
  }

  componentDidMount() {
    this.props.selectUser();
  }

  handleSendEvent = () => {
    const inputEl = document.querySelector('.send-msg-box').value;
    this.props.sendMsg(inputEl);
  }

  getDetailChatText = () => {
    const { chatList, detailChat } = this.props;
    debugger;
    let selectedUserId = +this.props.match.params.userId;

    const chatRoomUser = chatList.filter(user => user.id === selectedUserId)[0];
    const messageList = detailChat.filter(
      list => list.user_id === chatRoomUser.id
    );
    // const userMessages = chatRoomUser.messages.map(messageId => {
    //   for (let i = 0; i < detailChat.length; i++) {
    //     if (detailChat[i].id === messageId) {
    //       return detailChat[i];
    //     }
    //   }
    // });

    return (
      <div>
        <div className='chatroom-header'>
          <div className='back-btn'>
            <button onClick={this.props.history.goBack}>뒤로</button>
          </div>
          <div className='chatroom-user-name'>{chatRoomUser.user_name}</div>
        </div>
        <div className='chat-box'>
          {messageList.map(msg => (
            <div className='user-msg-element' key={msg.id}>
              <img src={chatRoomUser.userImage} alt={chatRoomUser.id} />
              <span className='user-msg'>{msg.text}</span>
              <div className='user-msg-created-at'>{msg.created_at}</div>
            </div>
          ))}
        </div>
        <div className='sending-box'>
          <input
            className='send-msg-box'
            type='text'
            placeholder='Type something to send...'
          />
          <button className='submit-btn' onClick={this.handleSendEvent}>
            보내기
          </button>
        </div>
      </div>
    );
  };

  render() {
    if (this.props.detailChat.length) {
      return <div className='chat-room'>{this.getDetailChatText()}</div>;
    } else {
      return <div>dummy </div>
    } 
  }
}
