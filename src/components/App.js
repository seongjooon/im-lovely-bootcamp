import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Home from './Home';
import ChatRoom from './ChatRoom';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.onLoad();
    this.props.getDetailChatFile();
  }

  render() {
    const {
      chatList,
      detailChat,
      selectUser,
      setCurDetailChat,
      curDetailChat,
      sendMsg
    } = this.props;
    return (
      <div className='App'>
        <Switch>
          <Route exact path='/' render={() => <Redirect to='/home' />} />
          <Route path='/home' render={() => <Home chatList={chatList} />} />
          <Route
            path='/chat_room/:userId'
            render={props => {
              if (!curDetailChat.length) {
                setCurDetailChat(detailChat);
              }

              if (curDetailChat) {
                return (
                  <ChatRoom
                    {...props}
                    chatList={chatList}
                    detailChat={curDetailChat}
                    selectUser={selectUser}
                    sendMsg={sendMsg}
                  />
                );
              }
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
