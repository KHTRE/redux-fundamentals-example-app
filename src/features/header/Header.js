import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

const Header = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleChange = event => setText(event.target.value);

  const handleKeyDown = event => {
    const trimmedText = event.target.value.trim();

    if (event.key === 'Enter' && trimmedText) {
      dispatch({
        type: 'todos/todoAdded',
        payload: trimmedText
      });

      setText('');
    }
  }

  return (
    <input
      type="text"
      placeholder="add todo"
      autoFocus={true}
      value={text}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
    />
  );
}

export default Header;