import React, { useContext } from "react";

import { Home } from "./pages/Home";
import { GlobalStyle } from "./styles/GlobalStyles";
import { Logo } from "./components/Logo";
import { Router,Redirect } from "@reach/router";
import { Detail } from "./pages/Detail";
import { Favs } from "./pages/Favs";
import { User } from "./pages/User";
import { NotRegisteredUser } from "./pages/NotRegisteredUser";
import { NavBar } from "./components/NavBar";
import { Context } from "./Context";

export const App = () => {
  const { isAuth } = useContext(Context);
  return (
    <div>
      <GlobalStyle />
      <Logo />
      <Router>
        <Home path="/" />
        <Home path="/pet/:id" />
        <Detail path="/detail/:detailId" />
        {!isAuth && <NotRegisteredUser path='/login'/>}
        {!isAuth && <Redirect noThrow from='/favs' to='/login'/>}
        {!isAuth && <Redirect noThrow from='/user' to='/login'/>}
        <Favs path="/favs" />
        <User path="/user" />
      </Router>
      
     
      <NavBar />
    </div>
  );
};
