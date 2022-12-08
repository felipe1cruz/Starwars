import React, { useContext, useEffect } from 'react';
import { PlanetsContext } from '../context/planetsContext';
import { tableHead } from '../data/data';

function Table() {
  const { context } = useContext(PlanetsContext);
  const { data,
    nameFilter: { nameInput }, dadosFiltrados, setDadosFiltrados } = context;
  const { filtrado } = context;

  useEffect(() => {
    setDadosFiltrados(data.sort((a, b) => a.name - b.name));
  }, [data]);

  return (
    <table>
      <thead>
        <tr>
          {tableHead.map((item) => <th key={ item }>{item}</th>)}
        </tr>
      </thead>
      <tbody>
        {!filtrado && dadosFiltrados
          .filter(({ name }) => name.toLowerCase().includes(nameInput.toLowerCase()))
          .map((planet, i) => (
            <tr key={ i }>
              <td data-testid="planet-name">{planet.name}</td>
              <td>{planet.rotation_period}</td>
              <td>{planet.orbital_period}</td>
              <td>{planet.diameter}</td>
              <td>{planet.climate}</td>
              <td>{planet.gravity}</td>
              <td>{planet.terrain}</td>
              <td>{planet.surface_water}</td>
              <td>{planet.population}</td>
              <td>{planet.films.map((film) => film)}</td>
              <td>{planet.created}</td>
              <td>{planet.edited}</td>
              <td>{planet.url}</td>

            </tr>
          ))}
        {filtrado && dadosFiltrados.map((planet, i) => (
          <tr key={ i + 1 }>
            <td>{planet.name}</td>
            <td>{planet.rotation_period}</td>
            <td>{planet.orbital_period}</td>
            <td>{planet.diameter}</td>
            <td>{planet.climate}</td>
            <td>{planet.gravity}</td>
            <td>{planet.terrain}</td>
            <td>{planet.surface_water}</td>
            <td>{planet.population}</td>
            <td>{planet.films.map((film) => film)}</td>
            <td>{planet.created}</td>
            <td>{planet.edited}</td>
            <td>{planet.url}</td>

          </tr>
        )) }
      </tbody>
    </table>
  );
}

export default Table;
