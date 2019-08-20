import React, { Component } from 'react';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.onLoad();
  }

  render() {
    const { chatList } = this.props;
    return (
      <div className='App'>
        {/* <header>CHAT</header> */}
        <div>
          {chatList.map(chatEl => (
            <div className='chat-element' key={chatEl.id}>
              <img src={chatEl.user_image} alt={chatEl.id} />
              <div className='chat-element-right-box'>
                <div className='user-name'>{chatEl.name}</div>
                <div className='user-text'>{chatEl.text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
