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
    setCurDetailChat(detailChats) {
      dispatch({
        type: 'SET_NEW_DETAIL_CHAT',
        detailChats
      });
    },
    sendMsg(msgData) {
      dispatch({
        type: 'SEND_MESSAGE',
        msgData
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
