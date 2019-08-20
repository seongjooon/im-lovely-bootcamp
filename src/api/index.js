import chatData from '../data/chatList.json';

export const getChatsList = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(chatData);
    }, 1000);
  });
};
