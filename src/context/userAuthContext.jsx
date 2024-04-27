import React, { createContext, useEffect, useState } from "react";

export const UserAuthContext = createContext();

export const UserProvider = ({ children }) => {
  const token = sessionStorage.getItem("token");

  const [usuarioLogado, setUsuarioLogado] = useState(token != null);

  useEffect(() => {
    if (token != null) {
      setUsuarioLogado(true);
    } else {
      setUsuarioLogado(false);
    }
  }, [token]);

  return (
    <UserAuthContext.Provider value={{ usuarioLogado, setUsuarioLogado }}>
      {children}
    </UserAuthContext.Provider>
  );
};
