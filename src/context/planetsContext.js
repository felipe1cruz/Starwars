import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import fetchPlanets from '../services/fetchPlanets';

export const PlanetsContext = createContext();

export const PlanetsContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [nameFilter, setNameFilter] = useState({ nameInput: '' });
  const [savedFilter, setSavedFilter] = useState([]);
  const [filtrado, setFiltrado] = useState(false);
  const [listaFiltrada, setListaFiltrada] = useState([]);
  const [dadosFiltrados, setDadosFiltrados] = useState([]);
  const [order, setOrder] = useState({
    column: 'population',
    sort: 'ASC',
  });
  const getPlanets = async () => {
    const planets = await fetchPlanets();
    const magicNumber = -1;
    const planetsNameOrder = planets.sort((a, b) => {
      if (a.name < b.name) { return magicNumber; }
      return 1;
    });
    setData(planetsNameOrder);
    // setListaFiltrada(planets);
  };

  const context = { data,
    setData,
    nameFilter,
    setNameFilter,
    savedFilter,
    setSavedFilter,
    filtrado,
    setFiltrado,
    listaFiltrada,
    setListaFiltrada,
    getPlanets,
    dadosFiltrados,
    setDadosFiltrados,
    order,
    setOrder,
  };

  return (
    <PlanetsContext.Provider value={ { context } }>
      { children }
    </PlanetsContext.Provider>
  );
};

PlanetsContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
