import { Button,
  FormControl,
  FormControlLabel, FormLabel, MenuItem, Radio, RadioGroup, Select }
from '@mui/material';
import React, { useContext, useState, useEffect } from 'react';
import { PlanetsContext } from '../context/planetsContext';

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

    <FormControl variant="standard" maxWidth="sm">

      <FormLabel id="column-sort"> Ordenar por</FormLabel>
      <Select
        label="Ordenar"
        data-testid="column-sort"
        labelId="column-sort"
        onChange={ (e) => setColumnOrder(e.target.value) }
        name="column"
        // value={ columnOrder }
      >
        {columnList.map((item, i) => (
          <MenuItem
            key={ i }
            value={ item }
          >
            {item}
          </MenuItem>))}
      </Select>

      <RadioGroup>
        <FormControlLabel
          control={ <Radio /> }
          label="Ascendente"
          type="radio"
          value="ASC"
          data-testid="column-sort-input-asc"
          labelId="ASC"
          name="order"
          onClick={ (e) => setAscDesc(e.target.value) }
        />
        <FormControlLabel
          control={ <Radio /> }
          label="Descendente"
          type="radio"
          value="DESC"
          data-testid="column-sort-input-desc"
          labelId="DESC"
          name="order"
          onClick={ (e) => setAscDesc(e.target.value) }
        />
      </RadioGroup>

      <Button
        maxWidth="sm"
        variant="contained"
        type="button"
        data-testid="column-sort-button"
        onClick={ () => orderFunction() }
      >
        Ordenar
      </Button>
    </FormControl>
  );
}

export default OrderFilter;
