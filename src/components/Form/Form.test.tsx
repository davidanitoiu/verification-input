import { fireEvent, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import Form from '.';

const setup = () => {
    const { container } = render(<Form />);
  
    const inputs = container.querySelectorAll('input');
    const form = container.querySelector('form');
    const submit = container.querySelector('button');
  
    return { inputs, form, submit }
  }

describe('Form', () => {
    it('should have 6 inputs & a button by default', () => {
        const {inputs, submit} = setup();
    
        expect(inputs.length).toBe(6);
        expect(submit).toBeInTheDocument();
    });

    it('should correctly accept paste events', () => {
        const {form} = setup();

        fireEvent.paste(form!,{
            clipboardData: {
                getData: () => 'string'
            }
        })

        expect(form).toHaveFormValues({
            n1: 's',
            n2: 't',
            n3: 'r',
            n4: 'i',
            n5: 'n',
            n6: 'g'
        })
    });

    it('should handle backspace correct', () => {
        const {inputs ,form} = setup();

        fireEvent.paste(form!,{
            clipboardData: {
                getData: () => 'string'
            }
        })

        expect(inputs[5]).toHaveFocus();
        userEvent.type(inputs[5],'{backspace}');

        expect(inputs[5]).toHaveValue('');
        expect(inputs[4]).toHaveFocus();
    })
})
