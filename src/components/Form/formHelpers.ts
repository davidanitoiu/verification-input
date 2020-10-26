import { last } from 'lodash';

export const assignCodeToInputs = (code: string, form: HTMLFormElement) => {
    const inputs = getInputs(form);
    const charArray = [...code];

    charArray.forEach(
        (character, i) => inputs[i].value = character
    )
};

const getInputs = (form: HTMLFormElement) => {
    return Array.from(form.elements).filter(element => element.tagName === 'INPUT') as HTMLInputElement[];
}

export const focusLastInput = (form: HTMLFormElement) => {
    const inputs = getInputs(form);
    const lastInput = last(inputs);
    lastInput?.focus();
}

export const focusPreviousInput = (input: HTMLInputElement) => {
    if (!input.previousSibling) return;

    const previousInput = input.previousSibling as HTMLInputElement;
    previousInput.focus();
}
