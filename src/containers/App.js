import { connect } from 'react-redux';
import App from '../components/App';
import { getChatsList } from '../api';
import { getDetailChat } from '../api';

const mapStateToProps = state => {
  return {
    chatList: state.chatListReducer,
    detailChat: state.detailChatReducer,
    userId: state.selectUser
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
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
