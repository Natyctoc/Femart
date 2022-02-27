import logo from './logo.svg';
import Button from 'react-bootstrap/Button'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Galería digital de arte femenino</h1>
        <p>
          La historia del arte borró a la mujer de sus registros, hundiendo en el olvido la expresión de muchas mujeres interesantes que aportaron mucho al avance del conocimiento sensible y estético. Es hora de reivindicarlas, de traerlas al centro de la discusión sobre arte, haremos justicia y  les devolveremos a las grandes mujeres artista, la gloria que se merecen.
        </p>
        <Button variant="outline-primary" size="lg">Buscar</Button>
        <h2>Lo que encontrarás aqui</h2>
      </header>
    </div>
  );
}

export default App;
