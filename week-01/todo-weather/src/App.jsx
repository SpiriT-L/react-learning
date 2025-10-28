import './App.css';
import Counter from './components/Counter';
import Greeting from './components/Greeting';
import NameInput from './components/NameInput';
import Team from './components/Team';
import UserList from './components/UserList';

function App() {
  const users = [
    {
      id: 1,
      name: 'LeonID',
      role: 'Frontend Developer',
      avatar: 'https://i.pravatar.cc/150?img=3',
    },
    {
      id: 2,
      name: 'Alex',
      role: 'React Engineer',
      avatar: 'https://i.pravatar.cc/150?img=4',
    },
    {
      id: 3,
      name: 'Kira',
      role: 'UI Designer',
      avatar: 'https://i.pravatar.cc/150?img=5',
    },
  ];
  return (
    <>
      <Team title='Awesome Team' members={users} />
      <Counter />
      <NameInput />
    </>
  );
}

export default App;
