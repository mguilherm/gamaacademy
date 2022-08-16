import React from 'react';
import { Link } from "react-router-dom"

// import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link to="./contact">
        Acessar página de Contato 
      </Link>
    </div>
  );
}

export default Home;