import './App.css';
import Counter from './components/Counter';
import Greeting from './components/Greeting';
import NameInput from './components/NameInput';
import Team from './components/Team';
import TodoApp from './components/TodoApp';
import UserList from './components/UserList';

function App() {
  const users = [
    {
      id: 1,
      name: 'Alice',
      role: 'Developer',
      avatar: 'https://i.pravatar.cc/150?img=1',
    },
    {
      id: 2,
      name: 'Bob',
      role: 'Designer',
      avatar: 'https://i.pravatar.cc/150?img=2',
    },
    {
      id: 3,
      name: 'Charlie',
      role: 'Product Manager',
      avatar: 'https://i.pravatar.cc/150?img=3',
    },
  ];

  return (
    <>
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <Greeting name='Team React Learners' />
        <Team title='Development Team' members={users} />
        <Counter />
        <NameInput />
        <TodoApp />
      </div>
    </>
  );
}

export default App;
