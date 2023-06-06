
import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './components/NavBar';
import { UserContextProvider } from './components/context/UserContext';

function App() {
  return (
    <>
      <UserContextProvider>
        <Navbar />
        <Outlet />
      </UserContextProvider>
    </>
  );
}


export default App;
