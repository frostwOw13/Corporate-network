import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {  deleteWorkMessage, setWorkMessage, updateWorkMessage } from '../../../redux/actions/usersActions';
import { ChatProps, IMessage, RootState } from '../../../shared/interfaces';

import './ChatWork.scss';

const ChatWork: React.FC<ChatProps> = ({ author }) => {
  const messages = useSelector((state: RootState) => state.workMessages);
  const [message, setMessage] = useState<IMessage>({ message: "", author: author.username, id: 0 });
  const [mode, setMode] = useState<string>("send");

  const dispatch = useDispatch();

  const changeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage({ ...message, message: e.target.value });
  };

  const submitHandler = () => {
    if (mode === "send") {
      if (message.message) dispatch(setWorkMessage({ ...message, id: Math.ceil(Math.random() * 100000) }));
      setMessage({ message: "", author: author.username, id: 0 });
    } else if (mode === "edit") {
      if (message) dispatch(updateWorkMessage(message));
      setMessage({ message: "", author: author.username, id: 0 });
      setMode("send");
    }
  };

  const handleEdit = (e: React.MouseEvent<HTMLDivElement>, messageItem: IMessage) => {
    setMode("edit");
    setMessage({ ...message, message: messageItem.message, id: messageItem.id});
  };

  const handleDelete = (messageItem: IMessage) => {
    dispatch(deleteWorkMessage(messageItem));
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
                  onClick={() => handleDelete(messageItem)} />
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
        <textarea className="chat__input" onChange={changeHandler} value={message.message} />
        <button className="chat__send" onClick={submitHandler} type="button">
          {mode === "send" ? "Send" : "Edit"}
        </button>
      </div>
    </div>
  );
};
export default ChatWork;
