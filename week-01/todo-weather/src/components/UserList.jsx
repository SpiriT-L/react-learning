import React from 'react';
import UserCard from './UserCard';

export default function UserList({ users }) {
  return (
    <div>
      {users.map(user => (
        <UserCard
          key={user.id}
          name={user.name}
          role={user.role}
          avatar={user.avatar}
        />
      ))}
    </div>
  );
}
