import { useState } from 'react';

export default function NameInput() {
  const [name, setName] = useState('');

  return (
    <div style={{ marginTop: '40px' }}>
      <h2>Type your name:</h2>
      <input
        type='text'
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder='Enter your name'
        style={{
          padding: '8px 12px',
          borderRadius: '8px',
          border: '1px solid #ccc',
        }}
      />
      <p style={{ marginTop: '10px' }}>
        {name ? `Hello, ${name}!` : '👋 Waiting for your name...'}
      </p>
    </div>
  );
}
