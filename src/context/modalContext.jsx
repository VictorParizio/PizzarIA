import { createContext, useContext, useState } from "react";

import "./styles.css";

const FastMessageContext = createContext();

export const useFastMessage = () => {
  return useContext(FastMessageContext);
};

export const FastMessageProvider = ({ children }) => {
  const [message, setMessage] = useState("");

  const showMessage = (msg) => {
    setMessage(msg);
    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  return (
    <FastMessageContext.Provider value={{ showMessage }}>
      {children}
      {message && (
        <div className="fast-message-container">
          <strong>{message}</strong>
        </div>
      )}
    </FastMessageContext.Provider>
  );
};
