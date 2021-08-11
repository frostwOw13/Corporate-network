import React from 'react';
import { useSelector } from 'react-redux';

import { IMessage, RootState } from '../../../shared/interfaces';

import './ChatWork.scss';

const ChatWork = () => {
  const messages = useSelector((state: RootState) => state.messages);

  return (
    <div className="chat__box">
      <div className="chat__area">
        <ul className="chat__list">
          {messages.map((message: IMessage) => (
            <li className="chat__item">
              <h5 className="item__author">{message.author}</h5>
              <p className="item__text">{message.message}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="chat__input-container">
        <textarea className="chat__input" />
        <button className="chat__send" type="button">Send</button>
      </div>
    </div>
  );
};
export default ChatWork;
