import chatData from '../data/chatList.json';
import chatDetailData from '../data/chatDetail.json';

export const getChatsList = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const chatListData = chatData.map(user => {
        const chatList = chatDetailData.filter(msg => user.id === msg.user_id);
        const lastMsg = chatList[chatList.length - 1];

        return {
          id: user.id,
          userName: user.user_name,
          created_at: lastMsg.created_at,
          text: lastMsg.text,
          userImage: user.user_image
        };
      });
      resolve(chatListData);
    }, 1000);
  });
};

export const getDetailChat = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(chatDetailData);
    }, 1000);
  });
};
