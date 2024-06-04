
import { Outlet } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation.tsx';

function App() {
  return (
    <>
      <Navigation/>
      <Outlet/>
      <h1>teste teste teste</h1>
    </>
  );
}

export default App;
