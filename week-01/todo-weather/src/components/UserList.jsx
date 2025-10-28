import UserCard from './UserCard';

export default function UserList({ users }) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '20px',
        flexWrap: 'wrap',
        marginTop: '20px',
      }}
    >
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
