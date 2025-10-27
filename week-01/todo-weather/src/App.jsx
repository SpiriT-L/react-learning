import './App.css';
import Greeting from './components/Greeting';
import UserCard from './components/UserCard';

function App() {
  return (
    <>
      <Greeting name="LeonID"/>
      <UserCard 
      name="LeonID"
      role="Frontend Developer"
      avatar="https://i.pravatar.cc/150?img=3"
      />
    </>
  );
}

export default App;
