import React from 'react'
import classes from './Form.module.css';

function Form() {
    return (
        <form name="verify">
            <div className={classes.inputs}>
                <input type="text" name="n1" maxLength="1" />
                <input type="text" name="n2" maxLength="1" />
                <input type="text" name="n3" maxLength="1" />
                <input type="text" name="n4" maxLength="1" />
                <input type="text" name="n5" maxLength="1" />
                <input type="text" name="n6" maxLength="1" />
            </div>
            <button>Verify</button>
        </form>
    )
};

export default Form;