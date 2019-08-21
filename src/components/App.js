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
    const { chatList, detailChat, selectUser } = this.props;

    return (
      <div className='App'>
        <Switch>
          <Route exact path='/' render={() => <Redirect to='/home' />} />
          <Route path='/home' render={() => <Home chatList={chatList} />} />
          <Route
            path='/chat_room/:userId'
            render={props => (
              <ChatRoom
                {...props}
                chatList={chatList}
                detailChat={detailChat}
                selectUser={selectUser}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
