import { render } from '@testing-library/react';
import React from 'react';
import App from './App';

const setup = () => {
  const { container } = render(<App />);

  const form = container.querySelector('form');

  return { form }
}

describe('App', () => {
  it('should contain a form', () => {
    const {form} = setup();

    expect(form).toBeInTheDocument();  
  })
})
