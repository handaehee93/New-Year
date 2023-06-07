
import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './components/NavBar';
// import { UserContextProvider } from './components/context/UserContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { UserContextProvider } from './context/UserContext';
const queryClient = new QueryClient()
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <UserContextProvider>
        <Navbar />
        <Outlet />
      </UserContextProvider>
    </QueryClientProvider>
  );
}




export default App;
