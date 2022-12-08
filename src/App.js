import React from 'react';
import './App.css';
import { Container } from '@mui/material';
import { PlanetsContextProvider } from './context/planetsContext';
import Header from './components/Header';
import Table from './components/Table';
import NameFilter from './components/NameFilter';
import NumberFilter from './components/NumberFilter';
import OrderFilter from './components/OrderFilter';

function App() {
  return (
    <PlanetsContextProvider>
      <Container>
        <Container maxWidth="sm">
          <Header />
        </Container>
        <Container maxWidth="sm">
          <NameFilter />
        </Container>
        <Container maxWidth="sm">
          <NumberFilter />
          <OrderFilter />
        </Container>
        <Table maxWidth="sm" />
      </Container>
    </PlanetsContextProvider>

  );
}

export default App;
