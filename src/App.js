import React from "react";
import GlobalStyles from "./GlobalStyles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ModalProvider } from "styled-react-modal";
import {
  SignupPage,
  LoginPage,
  Home,
  PrivateRoute,
  Forgot,
  ProfileUpdate,
  ProfilePages,
} from "./components";
import { AuthProvider } from "./components/contexts/AuthContext";

export default function App() {
  return (
    <AuthProvider>
      <ModalProvider>
        <Router>
          <GlobalStyles />
          <Switch>
            <PrivateRoute path="/" exact component={Home} />
            <Route path="/signup" component={SignupPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/forgot" component={Forgot} />
            <PrivateRoute path="/myProfile" component={ProfileUpdate} />
            <Route path="/profile/:id" component={ProfilePages} />
          </Switch>
        </Router>
      </ModalProvider>
    </AuthProvider>
  );
}
