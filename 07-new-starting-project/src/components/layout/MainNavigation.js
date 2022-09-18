import { useContext } from 'react';
import FavoritesContext from '../../store/favorites-context';
import { Link } from 'react-router-dom';
import cssModule from './MainNavigation.module.css';

const MainNavigation = () => {
  const favoriteCtx = useContext(FavoritesContext);

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
          <Link to="/favorites">
            My Favorites
            <span className={cssModule.badge}>
              {favoriteCtx.totalFavorites}
            </span>
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default MainNavigation;
