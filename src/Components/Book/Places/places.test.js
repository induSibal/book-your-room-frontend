import React from 'react';
import { render } from '@testing-library/react';
import Places from './places';

test('renders learn react link', () => {
  const { getByText } = render(<Places />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
