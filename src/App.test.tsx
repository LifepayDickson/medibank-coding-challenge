import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Medibank - Display Owners Pet By Gender/i);
  expect(linkElement).toBeInTheDocument();
});
