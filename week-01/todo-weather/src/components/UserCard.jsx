export default function UserCard({ name, role, avatar }) {
  return (
    <>
      <div
        style={{
          border: '1px solid #ccc',
          padding: '10px',
          borderRadius: '12px',
          textAlign: 'center',
          width: '220px',
          margin: '10px auto',
        }}
      >
        <img
          src={avatar}
          alt={name}
          width={80}
          height={80}
          style={{ borderRadius: '50%' }}
        />
        <h2>{name}</h2>
        <p>{role}</p>
      </div>
    </>
  );
}
