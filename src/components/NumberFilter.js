import React, { useContext, useState, useEffect } from 'react';
import { PlanetsContext } from '../context/planetsContext';
import FormControlStyle from '../style/FormControlStyle';

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
  };
  return (
    <FormControlStyle variant="standard" maxWidth="sm">
      <div>
        <label htmlFor="column-filter">
          Coluna:
          <select
            data-testid="column-filter"
            labelId="column-filter"
            onChange={ (e) => setColumnFilter(e.target.value) }
            name="column"
            value={ columnFilter }
            label="Coluna"
            id="column-filter"
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

        <label htmlFor="comparison-filter">
          Comparação:
          <select
            data-testid="comparison-filter"
            labelId="comparison-filter"
            onChange={ (e) => setComparisonFilter(e.target.value) }
            name="comparison"
            value={ comparisonFilter }
            label="Operador"
            id="comparison-filter"
          >
            <option value="maior que">maior que</option>
            <option value="menor que">menor que</option>
            <option value="igual a">igual a</option>
          </select>
        </label>

        <input
          type="number"
          data-testid="value-filter"
          name="value"
          onChange={ (e) => setValueFilter(e.target.value) }
          value={ valueFilter }
        />
        <button
          variant="contained"
          type="button"
          data-testid="button-filter"
          onClick={ () => handleClick() }
        >
          Filtrar

        </button>
      </div>
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
         <button
           variant="contained"
           type="button"
           data-testid="button-remove-filters"
           onClick={ () => setSavedFilter([]) }
         >
           Limpar
         </button>)}
    </FormControlStyle>
  );
}

export default NumberFilter;
