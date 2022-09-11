import { Link } from 'react-router-dom';
import cssModule from './MainNavigation.module.css';

const MainNavigation = () => {
  return (
    <header className={cssModule.header}>
      <div className={cssModule.logo}>React Meetups</div>
      <ul>
        <li>
          <Link to="/">All Meetups</Link>
        </li>
        <li>
          <Link to="/new">Add New Meetups</Link>
        </li>
        <li>
          <Link to="/favorites">My Favorites</Link>
        </li>
      </ul>
    </header>
  );
};

export default MainNavigation;
