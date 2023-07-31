import React, { useContext, useState, useEffect } from 'react';
import { PlanetsContext } from '../context/planetsContext';
import FormControlStyle from '../style/FormControlStyle';

function OrderFilter() {
  const { context } = useContext(PlanetsContext);
  const { order, setOrder, dadosFiltrados, setDadosFiltrados } = context;
  const [columnList] = useState(
    ['population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water'],
  );
  const [columnOrder, setColumnOrder] = useState(columnList[0]);
  const [ascDesc, setAscDesc] = useState('');

  function orderFunction() {
    setOrder({ column: columnOrder, sort: ascDesc });
    let listaOrdenada = [...dadosFiltrados];
    if (ascDesc === 'ASC') {
      listaOrdenada = dadosFiltrados.filter((planet) => planet[columnOrder] !== 'unknown')
        .sort((a, b) => a[columnOrder] - b[columnOrder]);
    } if (ascDesc === 'DESC') {
      listaOrdenada = dadosFiltrados.filter((planet) => planet[columnOrder] !== 'unknown')
        .sort((a, b) => b[columnOrder] - a[columnOrder]);
    }
    setDadosFiltrados(listaOrdenada);
  }

  useEffect(() => {

  }, [order, setOrder]);

  return (

    <FormControlStyle variant="standard" maxWidth="sm">

      <label htmlFor="column-sort">
        {' '}
        Ordenar
        <select
          label="Ordenar"
          data-testid="column-sort"
          id="column-sort"
          onChange={ (e) => setColumnOrder(e.target.value) }
          name="column"
        >
          {columnList.map((item, i) => (
            <option
              key={ i }
              value={ item }
            >
              {item}
            </option>))}
        </select>
      </label>
      <div>
        <label htmlFor="ASC">
          ASC

          <input
            label="Ascendente"
            type="radio"
            value="ASC"
            data-testid="column-sort-input-asc"
            id="ASC"
            name="order"
            onClick={ (e) => setAscDesc(e.target.value) }
          />
        </label>
        <label htmlFor="DESC">
          DESC

          <input
            label="Descendente"
            type="radio"
            value="DESC"
            data-testid="column-sort-input-desc"
            id="DESC"
            name="order"
            onClick={ (e) => setAscDesc(e.target.value) }
          />
        </label>
      </div>

      <button
        maxWidth="sm"
        variant="contained"
        type="button"
        data-testid="column-sort-button"
        onClick={ () => orderFunction() }
      >
        Ordenar
      </button>
    </FormControlStyle>
  );
}

export default OrderFilter;
