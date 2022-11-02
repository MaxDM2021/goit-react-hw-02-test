import React from 'react';
import './Todolist.css';


// ===== Вариант 1 =====

// const TodoList = ({ todos,  onDeleteTodo, }) => (<ul className="TodoList">
// {todos.map(({ id, text })=> (
//     <li key={id} className="TodoList__item" >
// <p className="TodoList__text">{text}</p>
// <button onClick={() => onDeleteTodo(id)}>Удалить</button>
//     </li>
// ))}
// </ul>
// );

// ===== Вариант 2 =====

const ContactList = ({ contacts, onDeleteContacts }) => (
  <ul className="TodoList">
    {contacts.map(({ id, name, phonenumber }) => (
      <li key={id} className="TodoList__item">
        <p className="TodoList__text">
          {name}: {phonenumber}
        </p>
        <button
          type="button"
          className="TodoList__btn"
          onClick={() => onDeleteContacts(id)}
        >
          Удалить
        </button>
      </li>
    ))}
  </ul>
);

export default ContactList;
