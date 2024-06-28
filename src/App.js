import './App.css';
import Navmenu from './components/nav/menu';
import Logo from './components/img/LOGO.png'
import Container from '../src/components/header/Header'
import Slide from './components/slide/Slide';

function App() {
  return (
    <>
      <Navmenu />
      <Slide />
      <Container />
    </>
  );
}

export default App;
