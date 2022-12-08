import { Typography } from '@mui/material';
import React, { useContext, useEffect } from 'react';
import { PlanetsContext } from '../context/planetsContext';

function Header() {
  const { context } = useContext(PlanetsContext);
  const { getPlanets } = context;

  useEffect(() => {
    getPlanets();
  }, []);

  return (
    <Typography maxWidth variant="h2">StarWars planets</Typography>
  );
}

export default Header;
