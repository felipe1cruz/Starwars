import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';
import { planets } from '../data/data';

describe('Testa a página starWars, desde da rendenização até os filtros', () => {
  beforeEach(() => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(planets),
    });
    render(<App />)
    });

  test('1 - Header.js - testa a rendenização da página', async () => {
    const pageTitle = screen.getByRole('heading', { name: /starwars planets/i });
    const Tatooine = await screen.findByText(/Tatooine/i);
    expect(pageTitle).toBeInTheDocument();
    expect(Tatooine).toBeInTheDocument();
  })

  test('2 - NameFilter.js - testa o input de busca pelo nome', async () => {
    const inputNameSearch = screen.getByRole('textbox');
    expect(inputNameSearch).toBeInTheDocument();

    const allPlanets = await screen.findAllByTestId("planet-name");
    expect(allPlanets).toHaveLength(9);

    userEvent.type(inputNameSearch, 'tatoo');
    expect(allPlanets).toHaveLength(9);


  })

  test('3 - NumberFilter - testa o input de busca numérico', async () => {
    const Tatooine = await screen.findByText(/Tatooine/i);
    expect(Tatooine).toBeInTheDocument();
    const valueInput = screen.getByRole('spinbutton');
    const btnFiltrar = screen.getByRole('button', { name: /filtrar/i });
    userEvent.type(valueInput, "200001");
    userEvent.click(btnFiltrar);
    expect(Tatooine).not.toBeInTheDocument();
    const Alderaan = await screen.findByText(/Alderaan/i);
    expect(Alderaan).toBeInTheDocument();

    const btnRemover = screen.getByRole('button', { name: /x/i });
    expect(btnRemover).toBeInTheDocument();
    userEvent.click(btnRemover);
    expect(btnRemover).not.toBeInTheDocument();
  })

  test('testa o botao limpar', async () => {
    const Tatooine = await screen.findByText(/Tatooine/i);
    expect(Tatooine).toBeInTheDocument();
    const valueInput = screen.getByRole('spinbutton');
    const btnFiltrar = screen.getByRole('button', { name: /filtrar/i });
    userEvent.type(valueInput, "200001");
    userEvent.click(btnFiltrar);
    expect(Tatooine).not.toBeInTheDocument();
    const Alderaan = await screen.findByText(/Alderaan/i);
    expect(Alderaan).toBeInTheDocument();

    const btnLimpar = screen.getByRole('button', { name: /limpar/i })
    expect(btnLimpar).toBeInTheDocument();
    userEvent.click(btnLimpar);
    expect(btnLimpar).not.toBeInTheDocument();

  })

  test('testa o input de busca numérico funciona como menor que', async () => {

    const operador = screen.getByRole('combobox', { name: /operador/i })
    const valueInput = screen.getByRole('spinbutton');
    const btnFiltrar = screen.getByRole('button', { name: /filtrar/i });
    const allPlanets = await screen.findAllByTestId("planet-name");
    expect(operador).toBeInTheDocument();
    userEvent.selectOptions(operador, 'menor que');
    userEvent.type(valueInput, "200001")
    userEvent.click(btnFiltrar);


   waitFor(() => expect(allPlanets[0]).toHaveTextContent("Alderaan"))
  })

  test('testa o input de busca numérico funciona como igual a', async () => {

    const operador = screen.getByRole('combobox', { name: /operador/i })
    const coluna = screen.getByRole('combobox', { name: /coluna/i })
    const valueInput = screen.getByRole('spinbutton');
    const btnFiltrar = screen.getByRole('button', { name: /filtrar/i });
    const allPlanets = await screen.findAllByTestId("planet-name");

    userEvent.selectOptions(coluna, 'orbital_period')
    userEvent.selectOptions(operador, 'igual a');
    userEvent.type(valueInput, "5110")
    userEvent.click(btnFiltrar);

    waitFor(() => expect(allPlanets[0]).toHaveTextContent("Bespin"))
  })


  test('testa o input de ordenacao ascendente', async () => {

   waitFor(() => expect(allPlanets).toHaveLength(9));
   waitFor(() => expect(allPlanets[0]).toHaveTextContent("Alderaan"));
   const ascInput = screen.getByTestId("column-sort-input-asc");
   const ordenar = screen.getByRole('combobox', { name: /ordenar/i })
   const btnOrdenar = screen.getByRole('button', { name: /ordenar/i });
   userEvent.selectOptions(ordenar, 'orbital_period')
   userEvent.click(ascInput);
   userEvent.click(btnOrdenar);
   const allPlanets = await screen.findAllByTestId("planet-name");
   waitFor(() => expect(allPlanets).toHaveLength(7));
   waitFor(() => expect(allPlanets[0]).toHaveTextContent("Tatooine"));
  })

  test('testa o input de ordenacao Descendente', async () => {

   const DescInput = screen.getByTestId("column-sort-input-desc");
   const btnOrdenar = screen.getByRole('button', { name: /ordenar/i });

   userEvent.click(DescInput);
   userEvent.click(btnOrdenar);
   const allPlanets = await screen.findAllByTestId("planet-name");
   waitFor(() => expect(allPlanets).toHaveLength(7));
   waitFor(() => expect(allPlanets[0]).toHaveTextContent("Coruscant"));
  })



})
