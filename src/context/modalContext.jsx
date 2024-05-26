import { createContext, useState } from "react";
import { Button } from "../components/Button";

export const MessageContext = createContext();

export const MessageProvider = ({ children }) => {
  const [title, setTitle] = useState(false);
  const [message, setMessage] = useState("");
  const [isModal, setIsModal] = useState(false);

  const closeModal = () => {
    setMessage("");
    setTitle("");
    setIsModal(false);
  };

  const showMessage = (arg1, arg2) => {
    if (arg2 === undefined) {
      setMessage(arg1);

      setTimeout(() => {
        setMessage("");
        setTitle("");
        setIsModal(false);
      }, 3000);
    } else {
      setIsModal(true);
      setTitle(arg1);
      setMessage(arg2);
    }
  };

  return (
    <MessageContext.Provider value={{ showMessage }}>
      {children}
      {isModal ? (
        <div className="modal-wrapper">
          <div className="modal-background" />
          <section
            className="modal-message"
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
          >
            <Button
              variant={"small"}
              onClick={closeModal}
              aria-label="Fechar modal"
            >
              x
            </Button>
            <h2 id="modal-title">{title}</h2>
            <p id="modal-description">{message}</p>
          </section>
        </div>
      ) : (
        message && (
          <div className="fast-message-container">
            <strong>{message}</strong>
          </div>
        )
      )}
    </MessageContext.Provider>
  );
};
