import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { ChatProps, RootState } from '../../shared/interfaces';
import ChatFlood from './ChatFlood/ChatFlood';
import ChatWork from './ChatWork/ChatWork';
import './Chat.scss';

const Chat: React.FC<ChatProps> = ({ author }) => {
  const [chat, setChat] = useState<string>('work');
  const users = useSelector((state: RootState) => state.users);

  const chatHandler = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as Element;
    setChat(target.id);
  };

  return (
    <div className="chat__container">
      <div className="chat__wrapper">
        <div className="chat__contacts">
          <div className="contact__switcher">
            <div
              aria-hidden="true"
              className={
                chat === 'work' ? 'switcher active' : 'switcher inactive'
              }
              id="work"
              onClick={chatHandler}
            >
              <h2 id="work">Work</h2>
            </div>
            <div
              aria-hidden="true"
              className={
                chat === 'flood' ? 'switcher active' : 'switcher inactive'
              }
              id="flood"
              onClick={chatHandler}
            >
              <h2 id="flood">flood</h2>
            </div>
          </div>
          <ul className="contacts__list">
            {users.map((user) => (
              <li className="contacts__item">
                <div className="contacts__image" />
                {user.username}
              </li>
            ))}
          </ul>
        </div>
        {chat === "work" ? (
          <ChatWork author={author} />
        ) : (
          <ChatFlood author={author} />
        )}
      </div>
    </div>
  );
};

export default Chat;
