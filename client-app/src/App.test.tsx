import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './app/layout/App';
import Home from './feature/Home/Home';

test('renders Headings', () => {
  render(<Home />);
  const Header = screen.getByText(/Welcome/i);
  expect(Header).toBeInTheDocument();
});
