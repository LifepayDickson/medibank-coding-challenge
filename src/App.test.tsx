import { render, screen } from '@testing-library/react';
import App from './App';

test('renders if main App is successfully loaded', () => {
  render(<App />);
  const linkElement = screen.getByText(/Display Owners Pet By Gender/i);
  expect(linkElement).toBeInTheDocument();
});
