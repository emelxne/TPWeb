import styled from 'styled-components';
import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/home';
import Login from './pages/login';
import Vol from './pages/vol';


import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <Appli>
        <Header/>
        <Switch>
          <Route path="/login" component={Login}>
            <Login />
          </Route>
          <Route path="/home" component={Home}>
            <Home />
          </Route>
          <Route path="/vol" component={Vol}>
            <Vol/>
          </Route>
        </Switch>
        <Footer/> 
      </Appli>
    </Router>
  );
}

export default App;

const Appli = styled.div`
  //background-color: blue;
`