import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {  setWorkMessage } from '../../../redux/actions/usersActions';
import { ChatProps, IMessage, RootState } from '../../../shared/interfaces';

import './ChatWork.scss';

const ChatWork: React.FC<ChatProps> = ({ author }) => {
  const messages = useSelector((state: RootState) => state.messages);
  const [message, setMessage] = useState<string>("");
  const [mode, setMode] = useState<string>("send");

  const dispatch = useDispatch();
  const stateMessages = useSelector((state: RootState) => state.messages);

  const changeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
    if (message === "") setMode("send");
  };

  const submitHandler = () => {
    if (message) dispatch(setWorkMessage({ message, author }));
    setMessage("");
    setMode("send");
  };

  const handleEdit = (e: React.MouseEvent<HTMLDivElement>, messageItem: IMessage) => {
    setMode("edit");
    setMessage(messageItem.message);
  };

  return (
    <div className="chat__box">
      <div className="chat__area">
        <ul className="chat__list">
          {messages.map((messageItem: IMessage, id: number) => (
            <li className="chat__item" key={id}>
              <div className="item__textarea">
                <h5 className="item__author">{messageItem.author}</h5>
                <p className="item__text">{messageItem.message}</p>
              </div>
              <div className="item__controls">
                <div
                  aria-hidden="true"
                  className="item__btn"
                  id="delete"
                  onClick={(e) => handleEdit(e, messageItem)} />
                <div
                  aria-hidden="true"
                  className="item__btn"
                  id="edit"
                  onClick={(e) => handleEdit(e, messageItem)} />
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="chat__input-container">
        <textarea className="chat__input" onChange={changeHandler} value={message} />
        <button className="chat__send" onClick={submitHandler} type="button">
          {mode === "send" ? "Send" : "Edit"}
        </button>
      </div>
    </div>
  );
};
export default ChatWork;
