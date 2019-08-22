import { connect } from 'react-redux';
import App from '../components/App';
import { getChatsList } from '../api';
import { getDetailChat } from '../api';

const mapStateToProps = state => {
  return {
    chatList: state.chatListReducer,
    detailChat: state.detailChatReducer,
    userId: state.selectUser,
    curDetailChat: state.curDetailChat,
    sendedMsg: state.sendMsgReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLoad() {
      getChatsList().then(chatList => {
        dispatch({
          type: 'INITIALIZE_CHAT_LIST',
          chatList
        });
      });
    },
    getDetailChatFile() {
      getDetailChat().then(detailChat => {
        dispatch({
          type: 'GET_DETAIL_CHAT',
          detailChat
        });
      });
    },
    selectUser(id) {
      dispatch({
        type: 'SELECT_USER',
        id
      });
    },
    setCurDetailChat(detailChats) {
      dispatch({
        type: 'SET_NEW_DETAIL_CHAT',
        detailChats
      });
    },
    sendMsg(msg) {
      console.log('sendMsg dispatch');
      dispatch({
        type: 'SEND_MESSAGE',
        myMsg: [
          {
            id: 666,
            user_id: 0,
            created_at: '10:31',
            text: msg
          }
        ]
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
