import React from 'react';
import { Link } from "react-router-dom";

// import { Container } from './styles';

const Contact: React.FC = () => {
  return (
    <div>
      <h1>Contact</h1>
      <Link to="/">
        Acessar página Inicial 
      </Link>
    </div>
  );
}

export default Contact;