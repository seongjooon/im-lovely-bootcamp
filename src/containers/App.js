import { connect } from 'react-redux';
import App from '../components/App';
import { getChatsList } from '../api';

const mapStateToProps = state => {
  return {
    chatList: state.chatListReducer
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
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
