import React from 'react';
import './App.css';
import { PlanetsContextProvider } from './context/planetsContext';
import Header from './components/Header';
import Table from './components/Table';
import NameFilter from './components/NameFilter';
import NumberFilter from './components/NumberFilter';
import OrderFilter from './components/OrderFilter';
import Body from './style/Body';
import AlignFilters from './style/AlignFilters';

function App() {
  return (
    <PlanetsContextProvider>
      <Body>
        <Header />
        <NameFilter />
        <AlignFilters>
          <NumberFilter />
          <OrderFilter />
        </AlignFilters>
        <Table />
      </Body>

    </PlanetsContextProvider>

  );
}

export default App;
