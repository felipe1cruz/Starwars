import React, { useContext, useEffect } from 'react';
import { PlanetsContext } from '../context/planetsContext';
import HeaderTitle from '../style/HeaderTitle';

function Header() {
  const { context } = useContext(PlanetsContext);
  const { getPlanets } = context;

  useEffect(() => {
    getPlanets();
  }, []);

  return (
    <div>
      <HeaderTitle larger>StarWars</HeaderTitle>
      <HeaderTitle>Planets Search</HeaderTitle>
    </div>
  );
}

export default Header;
