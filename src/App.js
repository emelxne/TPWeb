import React from 'react'
import styled from 'styled-components';
import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/home';
import Login from './pages/login';
import Signup from './pages/signup';
import Dashboard from "./pages/Dashboard"
import PrivateRoute from "./pages/PrivateRoute"
import ForgotPassword from "./pages/ForgotPassword"
import UpdateProfile from "./pages/UpdateProfile"
import Alaune from './pages/alaune';
import Vol from './pages/vol';
import { AuthProvider } from './contexts/AuthContext';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (

    <Router>
      <Appli>
        <Header />
        <Switch>
          <AuthProvider>
            <PrivateRoute exact path="/" component={Dashboard} />
            <PrivateRoute path="/update-profile" component={UpdateProfile} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/forgot-password" component={ForgotPassword} />
          </AuthProvider>
          <Route path="/alaune" component={Alaune} />
          <Route path="/home" component={Home} />
          <Route path="/vol" component={Vol} />
        </Switch>
        <Footer />
      </Appli>
    </Router>
  );
}

export default App;

const Appli = styled.div`
  //background-color: blue;
`