import React from 'react';
import UserList from './UserList';

export default function Team({ title, members }) {
  return (
    <div>
      <section style={{ margin: '40px 0' }}>
        <h2>{title}</h2>
        <UserList users={members} />
      </section>
    </div>
  );
}
