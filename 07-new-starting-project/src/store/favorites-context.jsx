import { createContext, useState } from 'react';

const FavoritesContext = createContext({
  favorite: [],
  totalFavorites: 0,
  addFavoriteHandler: (favoriteMeetup) => {},
  removeFavoriteHandler: (meetupId) => {},
  itemIsFavoriteHandler: (meetupId) => {},
});

export const FavoriteContextProvider = (props) => {
  const [userFavorites, setUserFavorites] = useState([]);

  const addFavoriteHandler = (favoriteMeetup) => {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.concat(favoriteMeetup);
    });
  };

  const removeFavoriteHandler = (meetupId) => {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.filter((meetup) => meetup.id !== meetupId);
    });
  };

  const itemIsFavoriteHandler = (meetupId) => {
    return userFavorites.some((meetup) => meetup.id === meetupId);
  };

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavoriteHandler: addFavoriteHandler,
    removeFavoriteHandler: removeFavoriteHandler,
    itemIsFavoriteHandler: itemIsFavoriteHandler,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContext;
