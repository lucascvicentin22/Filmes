import logo from './logo.svg';
import './App.css';
import MovieList from './components/MovieList';
import './styles.css'
import { Container, Navbar } from 'react-bootstrap';


function App() {
  return (
    <>
    <Navbar bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand href='#' className='mx-auto'>VPLAY - Filmes </Navbar.Brand>
        </Container>
    </Navbar>
      <MovieList />
    </>
  );
}

export default App;
