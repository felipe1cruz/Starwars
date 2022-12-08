const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

const fetchPlanets = async () => {
  const data = await fetch(URL);
  const response = await data.json();
  return response.results;
};

export default fetchPlanets;
