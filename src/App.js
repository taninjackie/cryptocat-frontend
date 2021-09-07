import './App.css';
import Home from './pages/Home'
import { Container } from 'react-bootstrap';
function App() {
  return (
    <Container style={{ height:"inherit", width:"inherit" , justifyContent: 'center', alignItems: 'center'}}>
        <Home/>
    </Container>
       
  );
}

export default App;
