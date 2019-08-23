import { initState } from './index';

import { chatListReducer } from './chatListReducer';
import { detailChatReducer } from './detailChatReducer';
import { messageReducer } from './messageReducer';

describe('reducer', () => {
  it('should return init value', () => {
    expect(initState).toHaveProperty('chatInitState');
    expect(initState.chatInitState).toEqual([]);
    expect(chatListReducer(undefined, {})).toEqual(initState.chatInitState);
    expect(detailChatReducer(undefined, {})).toEqual(initState.chatInitState);
    expect(messageReducer(undefined, {})).toEqual(initState.chatInitState);
  });
  
  describe('data of action should return equal value', () => {
    it('in chatListReducer', () => {
      expect(
        chatListReducer(initState.chatInitState, {
          type: 'INITIALIZE_CHAT_LIST',
          chatList: [
            {
              id: 666,
              userName: '희연이',
              created_at: '11:11',
              text: '안녕~',
              userImage: ''
            }
          ]
        })
      ).toEqual([
        {
          id: 666,
          userName: '희연이',
          created_at: '11:11',
          text: '안녕~',
          userImage: ''
        }
      ]);
      
      expect(
        chatListReducer(
          [
            {
              id: 666,
              userName: '희연이',
              created_at: '11:11',
              text: '안녕~',
              userImage: ''
            }
          ],
          {
            type: 'INITIALIZE_CHAT_LIST',
            chatList: [
              {
                id: 7,
                userName: '주찬이',
                created_at: '22:22',
                text: '뭐해요?',
                userImage: ''
              }
            ]
          }
        )
      ).toEqual([
        {
          id: 666,
          userName: '희연이',
          created_at: '11:11',
          text: '안녕~',
          userImage: ''
        },
        {
          id: 7,
          userName: '주찬이',
          created_at: '22:22',
          text: '뭐해요?',
          userImage: ''
        }
      ]);
    });

    it('in detailChatReducer', () => {
      expect(
        detailChatReducer(initState.detailChatInitState, {
          type: 'GET_DETAIL_CHAT',
          detailChat: {
            id: 0,
            user_id: 0,
            created_at: '2019-08-22T16:38:15.082Z',
            text: 'qhrhtlvdjdy~',
            isMine: false
          }
        })
      ).toEqual([
        {
          id: 0,
          user_id: 0,
          created_at: '2019-08-22T16:38:15.082Z',
          text: 'qhrhtlvdjdy~',
          isMine: false
        }
      ]);

      expect(
        detailChatReducer(
          [
            {
              id: 0,
              user_id: 0,
              created_at: '2019-08-22T16:38:15.082Z',
              text: 'qhrhtlvdjdy~',
              isMine: false
            }
          ],
          {
            type: 'GET_DETAIL_CHAT',
            detailChat: {
              id: 88,
              user_id: 88,
              created_at: '2019-08-22T16:38:15.082Z',
              text: '휴우~',
              isMine: false
            }
          }
        )
      ).toEqual([
        {
          id: 0,
          user_id: 0,
          created_at: '2019-08-22T16:38:15.082Z',
          text: 'qhrhtlvdjdy~',
          isMine: false
        },
        {
          id: 88,
          user_id: 88,
          created_at: '2019-08-22T16:38:15.082Z',
          text: '휴우~',
          isMine: false
        }
      ]);
    });

    it('in messageReducer', () => {
      expect(
        messageReducer(initState.messagesInitState, {
          type: 'SET_NEW_DETAIL_CHAT',
          detailChats: [
            {
              id: 0,
              user_id: 0,
              created_at: '2019-08-22T16:38:15.082Z',
              text: 'qhrhtlvdjdy~',
              isMine: false
            },
            {
              id: 88,
              user_id: 88,
              created_at: '2019-08-22T16:38:15.082Z',
              text: '휴우~',
              isMine: false
            }
          ]
        })
      ).toEqual([
        {
          id: 0,
          user_id: 0,
          created_at: '2019-08-22T16:38:15.082Z',
          text: 'qhrhtlvdjdy~',
          isMine: false
        },
        {
          id: 88,
          user_id: 88,
          created_at: '2019-08-22T16:38:15.082Z',
          text: '휴우~',
          isMine: false
        }
      ]);

      expect(
        messageReducer(
          [
            {
              id: 0,
              user_id: 99,
              created_at: '2019-08-22T16:38:15.082Z',
              text: 'qhrhtlvdjdy~',
              isMine: false
            },
            {
              id: 76,
              user_id: 189,
              created_at: '2019-08-22T16:38:15.082Z',
              text: '휴우~',
              isMine: false
            }
          ],
          {
            type: 'SEND_MESSAGE',
            msgData: [
              {
                id: 45,
                user_id: 5,
                created_at: '2019-08-22T16:38:15.082Z',
                text: 'party tonight~',
                isMine: false
              }
            ]
          }
        )
      ).toEqual([
        {
          id: 0,
          user_id: 99,
          created_at: '2019-08-22T16:38:15.082Z',
          text: 'qhrhtlvdjdy~',
          isMine: false
        },
        {
          id: 76,
          user_id: 189,
          created_at: '2019-08-22T16:38:15.082Z',
          text: '휴우~',
          isMine: false
        },
        {
          id: 45,
          user_id: 5,
          created_at: '2019-08-22T16:38:15.082Z',
          text: 'party tonight~',
          isMine: false
        }
      ]);
    });
  });
});
