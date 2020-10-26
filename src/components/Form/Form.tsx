import React from 'react';
import classes from './Form.module.css';
import { assignCodeToInputs, focusLastInput } from './formHelpers';

function Form({ numberOfInputs = 6 }) {
    const handlePaste = (e: React.ClipboardEvent<HTMLFormElement>) => {
        const pastedText = e.clipboardData.getData('text/plain');
        if (pastedText.trim().length === 0) return;

        const code = pastedText.substr(0, numberOfInputs);
        const form = e.currentTarget as HTMLFormElement;

        assignCodeToInputs(code, form);
        focusLastInput(form);
    };

    return (
        <form name="verify" onPaste={handlePaste} >
            <div className={classes.inputs}>
                {
                    [...(new Array(numberOfInputs))].map((_e, i) => {
                        const name = `n${i + 1}`;
                        return (
                            <input key={name} type="text" name={name} maxLength={1} />
                        )
                    })
                }
            </div>
            <button>Verify</button>
        </form>
    )
};

export default Form;
