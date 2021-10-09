import styled from 'styled-components'
import Header from './components/header';
import Footer from './components/footer';


function App() {
  return (
    <Appli>
      <Header/>
      je suis la
      <Footer/> 
    </Appli>
  );
}

export default App;

const Appli = styled.div`
  background-color: blue;
`