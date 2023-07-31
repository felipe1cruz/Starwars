import React, { useContext } from 'react';
import NameFilterStyle from '../style/NameFilterStyle';
import { PlanetsContext } from '../context/planetsContext';

function NameFilter() {
  const { context } = useContext(PlanetsContext);
  const { nameFilter, setNameFilter } = context;

  return (
    <NameFilterStyle
      fullWidth
      type="text"
      onChange={ ({ target }) => setNameFilter({ ...nameFilter,
        nameInput: target.value }) }
      data-testid="name-filter"
      name="filterInput"
      value={ nameFilter.nameInput }
      placeholder="Digite o nome do planeta"
      variant="standard"
    />
  );
}

export default NameFilter;
