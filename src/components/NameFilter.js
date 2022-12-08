import { TextField } from '@mui/material';
import React, { useContext } from 'react';
import { PlanetsContext } from '../context/planetsContext';

function NameFilter() {
  const { context } = useContext(PlanetsContext);
  const { nameFilter, setNameFilter } = context;

  return (
    <TextField
      fullWidth
      type="text"
      onChange={ ({ target }) => setNameFilter({ ...nameFilter,
        nameInput: target.value }) }
      data-testid="name-filter"
      name="filterInput"
      value={ nameFilter.nameInput }
      label="Digite o nome do planeta"
      variant="standard"
    />
  );
}

export default NameFilter;
