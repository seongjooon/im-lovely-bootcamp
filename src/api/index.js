import chatData from '../data/chatList.json';
import chatDetailData from '../data/chatDetail.json';

export const getChatsList = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(chatData);
    }, 1000);
  });
};

export const getDetailChat = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(chatDetailData);
    }, 1000);
  })
};
