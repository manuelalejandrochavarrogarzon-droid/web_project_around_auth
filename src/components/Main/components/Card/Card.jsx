import { useContext } from "react";
import CurrentUserContext from "../../../../contexts/CurrentUserContext";

export default function Card(props) {
  const { card, onCardClick, onCardLike, onCardDelete } = props;

  const { currentUser } = useContext(CurrentUserContext);

  const { name, link, likes, owner } = card;

  // ¿La tarjeta pertenece al usuario?
  const isOwn = owner._id === currentUser._id;

  // ¿El usuario actual ya dio like?
  const isLiked = likes.some((user) => user._id === currentUser._id);

  function handleLikeClick() {
    onCardLike(card);
  }

  function handleDeleteClick() {
    onCardDelete(card);
  }

  return (
    <li className="card">
      <img
        className="card__image"
        src={link}
        alt={name}
        onClick={() => onCardClick(card)}
      />

      {isOwn && (
        <button
          className="card__delete-button"
          type="button"
          onClick={handleDeleteClick}
        ></button>
      )}

      <div className="card__description">
        <h2 className="card__title">{name}</h2>

        <button
          type="button"
          className={`card__like-button ${
            isLiked ? "card__like-button_is-active" : ""
          }`}
          onClick={handleLikeClick}
        ></button>
      </div>
    </li>
  );
}
