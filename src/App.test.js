import { render, screen } from '@testing-library/react';
import App from './App';


describe('<App />', () => {
  test('should render web site logo properlly', () => {
    render(<App />);
    const linkElement = screen.getByAltText(/logo turistando/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('should render search input properlly', () => {
    render(<App />);
    expect(screen.getByPlaceholderText(/buscar/i)).toBeInTheDocument();
  })

  test('should show card with beachs info', () => {
    render(<App />);
    expect(screen.getAllByRole('button', {name: 'Saiba Mais'})[0]).toBeInTheDocument();

    expect(screen.getAllByText(/porto de galinhas/i)[0]).toBeInTheDocument();
  })

  test('', () => {
    render(<App />);
    expect(screen.getByText(/inicio/i)).toBeInTheDocument();
    expect(screen.getByText(/pontos turisticos/i)).toBeInTheDocument();
    expect(screen.getByText(/contato/i)).toBeInTheDocument();
    expect(screen.getByText(/litoral/i)).toBeInTheDocument();
  })
});
