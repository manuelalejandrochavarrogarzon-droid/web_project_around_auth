import { useState, useContext } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";

import Popup from "./Main/components/Popup/Popup";
import NewCard from "./Main/components/NewCard/NewCard";
import EditProfile from "./Main/components/EditProfile/EditProfile";
import EditAvatar from "./Main/components/EditAvatar/EditAvatar";
import Card from "./Main/components/Card/Card";
import ImagePopup from "./Main/components/ImagePopup/ImagePopup";

function Main(props) {
  const { currentUser } = useContext(CurrentUserContext);

  const { cards, onCardLike, onCardDelete, onAddPlaceSubmit } = props;

  const [popup, setPopup] = useState(null);

  const newCardPopup = {
    title: "Nuevo lugar",
    children: <NewCard onAddPlaceSubmit={onAddPlaceSubmit} />,
  };

  const editProfilePopup = {
    title: "Editar perfil",
    children: <EditProfile />,
  };

  const editAvatarPopup = {
    title: "Cambiar foto de perfil",
    children: <EditAvatar />,
  };

  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  function handleClosePopup() {
    setPopup(null);
  }

  function handleImageClick(card) {
    setPopup({
      title: "",
      children: <ImagePopup card={card} />,
    });
  }

  return (
    <main className="content">
      <section className="profile page__section">
        <img
          className="profile__image"
          src={currentUser.avatar}
          alt={currentUser.name}
          onClick={() => handleOpenPopup(editAvatarPopup)}
        />

        <div className="profile__info">
          <h1 className="profile__title">{currentUser.name}</h1>

          <button
            className="profile__edit-button"
            type="button"
            onClick={() => handleOpenPopup(editProfilePopup)}
          ></button>

          <p className="profile__description">{currentUser.about}</p>
        </div>

        <button
          className="profile__add-button"
          type="button"
          onClick={() => handleOpenPopup(newCardPopup)}
        ></button>
      </section>

      <section className="cards page__section">
        <ul className="cards__list">
          {cards.map((card) => (
            <Card
              key={card._id}
              card={card}
              onCardClick={handleImageClick}
              onCardLike={onCardLike}
              onCardDelete={onCardDelete}
            />
          ))}
        </ul>
      </section>

      {popup && (
        <Popup onClose={handleClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}
    </main>
  );
}

export default Main;
