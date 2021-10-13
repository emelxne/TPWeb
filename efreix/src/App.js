import styled from 'styled-components';
import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/home';
import Login from './pages/login';
import Panier from './pages/panier';
import Vol from './pages/vol';
import Pay from './pages/pay';
import Faq from './pages/faq';
//import { AuthProvider } from './contexts/AuthContext';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

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