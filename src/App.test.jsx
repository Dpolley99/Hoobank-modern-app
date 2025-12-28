import { render, screen } from '@testing-library/react';
import App from './App';

describe('Hoobank App', () => {
  test('renders the app without crashing', () => {
    render(<App />);
  });

  test('renders hero headings', () => {
    render(<App />);

    const headings = screen.getAllByRole('heading', { level: 1 });

    expect(headings.length).toBeGreaterThanOrEqual(2);
  });



  test('renders navigation links', () => {
    render(<App />);
    expect(screen.getAllByText(/home/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/features/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/product/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/clients/i).length).toBeGreaterThan(0);
  });

  test('renders primary call-to-action button', () => {
    render(<App />);
    const buttons = screen.getAllByRole('button', { name: /get started/i });
    expect(buttons.length).toBeGreaterThan(0);
  });
});
