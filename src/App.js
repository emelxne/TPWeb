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
          <Route path="/login" component={Login}/>
          <Route path="/home" component={Home}/>
          <Route path="/vol" component={Vol}/>
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