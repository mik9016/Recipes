import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = (props) => {
  const [isLogged, setIsLogged] = useState(true);

  const contextItems = {
      userName: 'hardcoded User',
      userMail: 'hardcoded User Email',
      
      
  }

  return <AuthContext.Provider value={[isLogged,contextItems]}>{props.children}</AuthContext.Provider>;
};
