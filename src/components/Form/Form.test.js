import { render } from '@testing-library/react';
import React from 'react';
import Form from '.';

const setup = () => {
    const { container } = render(<Form />);
  
    const inputs = container.querySelectorAll('input');
    const form = container.querySelectorAll('form');
    const submit = container.querySelector('button');
  
    return { inputs, form, submit }
  }

describe('Form', () => {
    it('should have 6 inputs & a button', () => {
        const {inputs, submit} = setup();
    
        expect(inputs.length).toBe(6);
        expect(submit).toBeInTheDocument();
      });
})