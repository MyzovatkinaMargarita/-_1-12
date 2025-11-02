  //урок 7-8
import React, { useState } from 'react';

const TaskInput = ({ onAdd }) => {
  const [text, setText] = useState('');

  const handleAdd = () => {
    if (text.trim() === '') return;
    onAdd(text.trim());
    setText('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAdd();
    }
  };

  return (
    <div style={{ marginBottom: 15 }}>
      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Новая задача"
        style={{ padding: 6, width: '70%', marginRight: 10 }}
      />
      <button onClick={handleAdd}>Добавить</button>
    </div>
  );
};

export default TaskInput;
