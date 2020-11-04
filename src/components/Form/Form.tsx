import React from 'react';
import classes from './Form.module.css';
import { assignCodeToInputs, autoProgressInput, focusLastInput, focusPreviousInput, handleFormNavigation, handleInputNavigation } from './formHelpers';

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
        const input = e.currentTarget;

        if (['Backspace', 'Delete'].includes(e.key)) {
            e.preventDefault();

            input.value = ''
            focusPreviousInput(input);

            return;
        }

        handleInputNavigation(e.key,input);
    }

    const handleNavigation = (e: React.KeyboardEvent<HTMLFormElement>) => {
        if (e.target instanceof HTMLInputElement && e.target.value) {
            const input = e.target as HTMLInputElement
            autoProgressInput(e.key, input);
            handleInputNavigation(e.key, input);
        }

        const form = e.currentTarget as HTMLFormElement;
        handleFormNavigation(e.key, form);
    }

    return (
        <form name="verify" onPaste={handlePaste} onKeyDown={handleNavigation}>
            <div className={classes.inputs}>
                {
                    [...(new Array(numberOfInputs))].map((_e, i) => {
                        const name = `n${i + 1}`;
                        return (
                            <input
                                key={name}
                                name={name}
                                maxLength={1}
                                pattern="[A-Za-z0-9]"
                                title={'Only letters and digits are allowed'}
                                autoComplete="off"
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
