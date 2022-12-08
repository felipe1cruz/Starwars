import { Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React, { useContext, useState, useEffect } from 'react';
import { PlanetsContext } from '../context/planetsContext';

function NumberFilter() {
  const { context } = useContext(PlanetsContext);
  const { savedFilter,
    setSavedFilter,
    setFiltrado,
    data, setDadosFiltrados } = context;
  const [columnList, setColumnList] = useState(
    ['population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water'],
  );
  const [columnFilter, setColumnFilter] = useState(columnList[0]);
  const [comparisonFilter, setComparisonFilter] = useState('maior que');
  const [valueFilter, setValueFilter] = useState(0);

  const numerosFiltrados = () => {
    let filterData = [...data];
    savedFilter.forEach(({ column, comparison, value }) => {
      filterData = filterData.filter((planet) => {
        if (comparison === 'maior que') {
          return Number(planet[column]) > Number(value);
        }
        if (comparison === 'menor que') {
          return Number(planet[column]) < Number(value);
        }
        return Number(planet[column]) === Number(value);
      });
    });
    setDadosFiltrados(filterData);
  };

  useEffect(() => {
    numerosFiltrados();
  }, [savedFilter]);

  const handleClick = () => {
    setSavedFilter([...savedFilter,
      { column: columnFilter,
        comparison: comparisonFilter,
        value: valueFilter }]);
    setColumnList(columnList.filter((list) => list !== columnFilter));
    setColumnFilter(columnList[1]);
    setComparisonFilter('maior que');
    setValueFilter(0);
    setFiltrado(true);
  };

  const deleteItem = (item) => {
    setColumnList([...columnList, item.column]);
    const newList = savedFilter.filter((list) => item !== list);
    setSavedFilter(newList);
    // if (newList.length === 0) {
    //   setFiltrado(false);
    // }
  };
  return (
    <FormControl variant="standard" maxWidth="sm">
      <InputLabel id="column-filter">Coluna</InputLabel>
      <Select
        data-testid="column-filter"
        labelId="column-filter"
        onChange={ (e) => setColumnFilter(e.target.value) }
        name="column"
        value={ columnFilter }
        label="Coluna"
      >
        {columnList.map((item, i) => (
          <MenuItem
            key={ i }
            value={ item }
          >
            {item}
          </MenuItem>))}
      </Select>

      <Select
        data-testid="comparison-filter"
        labelId="comparison-filter"
        onChange={ (e) => setComparisonFilter(e.target.value) }
        name="comparison"
        value={ comparisonFilter }
        label="Operador"
      >
        <MenuItem value="maior que">maior que</MenuItem>
        <MenuItem value="menor que">menor que</MenuItem>
        <MenuItem value="igual a">igual a</MenuItem>
      </Select>

      <InputLabel
        type="number"
        data-testid="value-filter"
        name="value"
        onChange={ (e) => setValueFilter(e.target.value) }
        value={ valueFilter }
      />
      <Button
        variant="contained"
        type="button"
        data-testid="button-filter"
        onClick={ () => handleClick() }
      >
        Filtrar

      </Button>
      {savedFilter.map((item, i) => (
        <div key={ i } data-testid="filter">
          <span>{item.column}</span>
          <span>{item.comparison}</span>
          <span>{item.value}</span>
          <button type="button" onClick={ () => deleteItem(item) }>X</button>
        </div>
      ))}
      { savedFilter.length > 0
       && (
         <Button
           variant="contained"
           type="button"
           data-testid="button-remove-filters"
           onClick={ () => setSavedFilter([]) }
         >
           Limpar
         </Button>)}
    </FormControl>
  );
}

export default NumberFilter;
