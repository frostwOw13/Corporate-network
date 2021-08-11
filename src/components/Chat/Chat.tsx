import React from 'react';

import ChatWork from './ChatWork/ChatWork';
import './Chat.scss';

const Chat = () => (
  <div className="chat__container">
    <div className="chat__wrapper">
      <div className="chat__contacts">
        <div className="contact__switcher">
          <div className="switcher"><h2>Work Chat</h2></div>
          <div className="switcher"><h2>Spam Chat</h2></div>
        </div>
        <ul className="contacts__list">
          <li className="contacts__item">
            <div className="contacts__image" />
            admin1
          </li>
          <li className="contacts__item">
            <div className="contacts__image" />
            admin2
          </li>
        </ul>
      </div>
      <ChatWork />
    </div>
  </div>
);

export default Chat;
