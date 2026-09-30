import { useRef, useContext } from "react";
import CurrentUserContext from "../../../../contexts/CurrentUserContext";

export default function EditAvatar() {
  const avatarRef = useRef();

  const { handleUpdateAvatar } = useContext(CurrentUserContext);

  function handleSubmit(event) {
    event.preventDefault();

    handleUpdateAvatar({
      avatar: avatarRef.current.value,
    });

    // Limpia el campo después de enviar
    avatarRef.current.value = "";
  }

  return (
    <form
      className="popup__form"
      id="avatar-form"
      name="avatar-form"
      noValidate
      onSubmit={handleSubmit}
    >
      <label className="popup__field">
        <input
          ref={avatarRef}
          id="avatar"
          className="popup__input"
          name="avatar"
          type="url"
          placeholder="Enlace de la imagen"
          required
        />

        <span className="popup__error" id="avatar-error"></span>
      </label>

      <button className="button popup__button" type="submit">
        Guardar
      </button>
    </form>
  );
}
