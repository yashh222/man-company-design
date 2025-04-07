import React from 'react';
import { render, screen } from '@testing-library/react';
import HeroSection from './_components/HeroSection';

test('renders learn react link', () => {
  render(<HeroSection />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
