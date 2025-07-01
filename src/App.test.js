import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Hello text', () => {
  render(<App />);
  const helloElement = screen.getByText('Hello world !!!');
  expect(helloElement).toBeInTheDocument();
});
