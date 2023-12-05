import logo from './logo.svg';
import './Home.css';
import { Outlet, Link } from 'react-router-dom';

function Root() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Outlet />
        <Link to={'/'}>Home</Link><Link to={'lazy'}>Lazy</Link>
      </header>
      
    </div>
  );
}

export default Root;
