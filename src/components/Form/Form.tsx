import React from 'react';
import classes from './Form.module.css';
import { assignCodeToInputs, focusLastInput, focusPreviousInput } from './formHelpers';

function Form({ numberOfInputs = 6 }) {
    const handlePaste = (e: React.ClipboardEvent<HTMLFormElement>) => {
        const pastedText = e.clipboardData.getData('text/plain');
        if (pastedText.trim().length === 0) return;

        const code = pastedText.substr(0, numberOfInputs);
        const form = e.currentTarget as HTMLFormElement;

        assignCodeToInputs(code, form);
        focusLastInput(form);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(['Backspace','Delete'].includes(e.key)) {
            e.preventDefault();
            const input = e.currentTarget;
            input.value = ''

            focusPreviousInput(input);
        }
    }

    return (
        <form name="verify" onPaste={handlePaste} >
            <div className={classes.inputs}>
                {
                    [...(new Array(numberOfInputs))].map((_e, i) => {
                        const name = `n${i + 1}`;
                        return (
                            <input 
                                key={name}
                                name={name}
                                maxLength={1}
                                onKeyDown={handleKeyDown}
                            />
                        )
                    })
                }
            </div>
            <button>Verify</button>
        </form>
    )
};

export default Form;
