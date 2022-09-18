import React, { useContext } from 'react';
import Card from '../ui/Card';
import cssModule from './MeetupItem.module.css';
import FavoritesContext from '../../store/favorites-context';

const MeetupItem = (props) => {
  const favoriteCtx = useContext(FavoritesContext);

  const itemIsFavorite = favoriteCtx.itemIsFavoriteHandler(props.id);

  const toggleFavoriteStatusHandler = () => {
    if (itemIsFavorite) {
      favoriteCtx.removeFavoriteHandler(props.id);
    } else {
      favoriteCtx.addFavoriteHandler({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address,
      });
    }
  };

  return (
    <li className={cssModule.item}>
      <Card>
        <div className={cssModule.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={cssModule.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={cssModule.actions}>
          <button onClick={toggleFavoriteStatusHandler}>
            {itemIsFavorite ? 'Remove from Favorites' : 'To Favorites'}
          </button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItem;
