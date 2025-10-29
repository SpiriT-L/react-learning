import { useState } from 'react';

export default function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTask = () => {
    if (inputValue.trim() === '') return;
    const newTask = {
      id: Date.now(),
      text: inputValue,
      done: false,
    };
    setTasks([...tasks, newTask]);
    setInputValue('');
  };

  const deleteTask = id => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleDone = id => {
    setTasks(
      tasks.map(task => (task.id === id ? { ...task, done: !task.done } : task))
    );
  };

  return (
    <div
      style={{
        marginTop: '40px',
        border: '2px solid #61dafb',
        borderRadius: '12px',
        padding: '20px',
        maxWidth: '400px',
        margin: '40px auto',
      }}
    >
      <h2>📝 ToDo List</h2>

      <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
        <input
          type='text'
          value={inputValue}
          placeholder='Add a new task...'
          onChange={e => setInputValue(e.target.value)}
          style={{
            flex: '1',
            padding: '8px',
            borderRadius: '8px',
            border: '1px solid #ccc',
          }}
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      {tasks.length === 0 ? (
        <p style={{ color: '#888' }}>No tasks yet 😴</p>
      ) : (
        <ul
          style={{
            listStyle: 'none',
            padding: 0,
          }}
        >
          {tasks.map(task => (
            <li
              key={task.id}
              style={{
                marginBottom: '10px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                background: task.done ? '#e6ffe6' : '#f0f0f0',
                padding: '8px 12px',
                borderRadius: '8px',
                cursor: 'pointer',
                color: task.done ? '#888' : '#000',
                textDecoration: task.done ? 'line-through' : 'none',
              }}
            >
              <span onClick={() => toggleDone(task.id)}>{task.text}</span>
              <button onClick={() => deleteTask(task.id)}>✕</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
