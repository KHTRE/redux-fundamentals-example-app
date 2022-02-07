import React from 'react'
import { useSelector } from 'react-redux'
// import TodoListItem from './TodoListItem'

const selectTodos = state => state.todos;

const Todoslist = () => {
  const todos = useSelector(selectTodos);
  console.log(todos.todos)
  const renderedListItems = todos.todos.map(todo => {
    return (
      // <TodoListItem key={todo.id} todo={todo} />
      <li key={todo.id}>{todo.text}</li>  
    );
  });

  return(
    <ul className="todo-list">{renderedListItems}</ul>
  );
}

export default Todoslist;