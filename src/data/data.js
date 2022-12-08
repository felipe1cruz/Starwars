export const tableHead = ['name',
  'rotation_period',
  'orbital_period',
  'diameter',
  'climate',
  'gravity',
  'terrain',
  'surface_water',
  'population',
  'films',
  'created',
  'edited',
  'url'];

const standardOne = '1 standard';
const filmUrl1 = 'https://swapi-trybe.herokuapp.com/api/films/1/';
const filmUrl2 = 'https://swapi-trybe.herokuapp.com/api/films/3/';
const filmUrl3 = 'https://swapi-trybe.herokuapp.com/api/films/4/';
const filmUrl4 = 'https://swapi-trybe.herokuapp.com/api/films/5/';
const filmUrl5 = 'https://swapi-trybe.herokuapp.com/api/films/6/';
const filmUrl6 = 'https://swapi-trybe.herokuapp.com/api/films/2/';

export const planets = {
  results: [
    {
      name: 'Tatooine',
      rotation_period: '23',
      orbital_period: '304',
      diameter: '10465',
      climate: 'arid',
      gravity: standardOne,
      terrain: 'desert',
      surface_water: '1',
      population: '200000',
      residents: [
        'https://swapi-trybe.herokuapp.com/api/people/1/',
        'https://swapi-trybe.herokuapp.com/api/people/2/',
        'https://swapi-trybe.herokuapp.com/api/people/4/',
        'https://swapi-trybe.herokuapp.com/api/people/6/',
        'https://swapi-trybe.herokuapp.com/api/people/7/',
        'https://swapi-trybe.herokuapp.com/api/people/8/',
        'https://swapi-trybe.herokuapp.com/api/people/9/',
        'https://swapi-trybe.herokuapp.com/api/people/11/',
        'https://swapi-trybe.herokuapp.com/api/people/43/',
        'https://swapi-trybe.herokuapp.com/api/people/62/',
      ],
      films: [
        filmUrl1,
        filmUrl2,
        filmUrl3,
        filmUrl4,
        filmUrl5,
      ],
      created: '2014-12-09T13:50:49.641000Z',
      edited: '2014-12-20T20:58:18.411000Z',
      url: 'https://swapi-trybe.herokuapp.com/api/planets/1/',
    },
    {
      name: 'Alderaan',
      rotation_period: '24',
      orbital_period: '364',
      diameter: '12500',
      climate: 'temperate',
      gravity: standardOne,
      terrain: 'grasslands, mountains',
      surface_water: '40',
      population: '2000000000',
      residents: [
        'https://swapi-trybe.herokuapp.com/api/people/5/',
        'https://swapi-trybe.herokuapp.com/api/people/68/',
        'https://swapi-trybe.herokuapp.com/api/people/81/',
      ],
      films: [
        filmUrl1,
        filmUrl5,
      ],
      created: '2014-12-10T11:35:48.479000Z',
      edited: '2014-12-20T20:58:18.420000Z',
      url: 'https://swapi-trybe.herokuapp.com/api/planets/2/',
    },
    {
      name: 'Yavin IV',
      rotation_period: '24',
      orbital_period: '4818',
      diameter: '10200',
      climate: 'temperate, tropical',
      gravity: standardOne,
      terrain: 'jungle, rainforests',
      surface_water: '8',
      population: '1000',
      residents: [],
      films: [
        filmUrl1,
      ],
      created: '2014-12-10T11:37:19.144000Z',
      edited: '2014-12-20T20:58:18.421000Z',
      url: 'https://swapi-trybe.herokuapp.com/api/planets/3/',
    },
    {
      name: 'Hoth',
      rotation_period: '23',
      orbital_period: '549',
      diameter: '7200',
      climate: 'frozen',
      gravity: '1.1 standard',
      terrain: 'tundra, ice caves, mountain ranges',
      surface_water: '100',
      population: 'unknown',
      residents: [],
      films: [
        filmUrl6],
      created: '2014-12-10T11:39:13.934000Z',
      edited: '2014-12-20T20:58:18.423000Z',
      url: 'https://swapi-trybe.herokuapp.com/api/planets/4/',
    },
    {
      name: 'Dagobah',
      rotation_period: '23',
      orbital_period: '341',
      diameter: '8900',
      climate: 'murky',
      gravity: 'N/A',
      terrain: 'swamp, jungles',
      surface_water: '8',
      population: 'unknown',
      residents: [],
      films: [
        filmUrl6, filmUrl2,
        filmUrl5,
      ],
      created: '2014-12-10T11:42:22.590000Z',
      edited: '2014-12-20T20:58:18.425000Z',
      url: 'https://swapi-trybe.herokuapp.com/api/planets/5/',
    },
    {
      name: 'Bespin',
      rotation_period: '12',
      orbital_period: '5110',
      diameter: '118000',
      climate: 'temperate',
      gravity: '1.5 (surface), 1 standard (Cloud City)',
      terrain: 'gas giant',
      surface_water: '0',
      population: '6000000',
      residents: [
        'https://swapi-trybe.herokuapp.com/api/people/26/',
      ],
      films: [
        filmUrl6],
      created: '2014-12-10T11:43:55.240000Z',
      edited: '2014-12-20T20:58:18.427000Z',
      url: 'https://swapi-trybe.herokuapp.com/api/planets/6/',
    },
    {
      name: 'Endor',
      rotation_period: '18',
      orbital_period: '402',
      diameter: '4900',
      climate: 'temperate',
      gravity: '0.85 standard',
      terrain: 'forests, mountains, lakes',
      surface_water: '8',
      population: '30000000',
      residents: [
        'https://swapi-trybe.herokuapp.com/api/people/30/',
      ],
      films: [
        filmUrl2,
      ],
      created: '2014-12-10T11:50:29.349000Z',
      edited: '2014-12-20T20:58:18.429000Z',
      url: 'https://swapi-trybe.herokuapp.com/api/planets/7/',
    },
    {
      name: 'Naboo',
      rotation_period: '26',
      orbital_period: '312',
      diameter: '12120',
      climate: 'temperate',
      gravity: standardOne,
      terrain: 'grassy hills, swamps, forests, mountains',
      surface_water: '12',
      population: '4500000000',
      residents: [
        'https://swapi-trybe.herokuapp.com/api/people/3/',
        'https://swapi-trybe.herokuapp.com/api/people/21/',
        'https://swapi-trybe.herokuapp.com/api/people/35/',
        'https://swapi-trybe.herokuapp.com/api/people/36/',
        'https://swapi-trybe.herokuapp.com/api/people/37/',
        'https://swapi-trybe.herokuapp.com/api/people/38/',
        'https://swapi-trybe.herokuapp.com/api/people/39/',
        'https://swapi-trybe.herokuapp.com/api/people/42/',
        'https://swapi-trybe.herokuapp.com/api/people/60/',
        'https://swapi-trybe.herokuapp.com/api/people/61/',
        'https://swapi-trybe.herokuapp.com/api/people/66/',
      ],
      films: [
        filmUrl2,
        filmUrl3,
        filmUrl4,
        filmUrl5,
      ],
      created: '2014-12-10T11:52:31.066000Z',
      edited: '2014-12-20T20:58:18.430000Z',
      url: 'https://swapi-trybe.herokuapp.com/api/planets/8/',
    },
    {
      name: 'Coruscant',
      rotation_period: '24',
      orbital_period: '368',
      diameter: '12240',
      climate: 'temperate',
      gravity: standardOne,
      terrain: 'cityscape, mountains',
      surface_water: 'unknown',
      population: '1000000000000',
      residents: [
        'https://swapi-trybe.herokuapp.com/api/people/34/',
        'https://swapi-trybe.herokuapp.com/api/people/55/',
        'https://swapi-trybe.herokuapp.com/api/people/74/',
      ],
      films: [
        filmUrl2,
        filmUrl3,
        filmUrl4,
        filmUrl5,
      ],
      created: '2014-12-10T11:54:13.921000Z',
      edited: '2014-12-20T20:58:18.432000Z',
      url: 'https://swapi-trybe.herokuapp.com/api/planets/9/',
    },
  ] };