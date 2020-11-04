import { find, findLast } from 'lodash';

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

export const focusFirstInput = (form: HTMLFormElement) => {
    const lastInput = find(form.elements, (element: any) => element instanceof HTMLInputElement) as HTMLInputElement;
    lastInput.focus();
}

export const focusLastInput = (form: HTMLFormElement) => {
    const lastInput = findLast(form.elements, (element: any) => element instanceof HTMLInputElement) as HTMLInputElement;
    lastInput.focus();
}

export const focusPreviousInput = (input: HTMLInputElement) => {
    if (!input.previousSibling) return;

    const previousInput = input.previousSibling as HTMLInputElement;
    previousInput.focus();
}

export const focusNextInput = (input: HTMLInputElement) => {
    if (!input.nextSibling) return;

    const nextInput = input.nextSibling as HTMLInputElement;
    nextInput.focus();
}

const focusVerifyButton = (form: HTMLFormElement) => {
    const verifyButton = find(form.elements, (element: any) => element instanceof HTMLButtonElement && element.innerText === 'Verify') as HTMLButtonElement;
    verifyButton.focus();
}

export const autoProgressInput = (key: string, input: HTMLInputElement) => {
    if (key === 'Tab') return;
    
    focusNextInput(input);
}

export const handleInputNavigation = (key: string, input: HTMLInputElement) => {
    switch (key) {
        case 'PageDown':
        case 'ArrowRight':
            focusNextInput(input);
            return;
        case 'PageUp':
        case 'ArrowLeft':
            focusPreviousInput(input);
            return;
        default:
            return;
    }
}

export const handleFormNavigation = (key: string, form: HTMLFormElement) => {
    switch (key) {
        case 'ArrowUp':
        case 'Home':
            focusFirstInput(form);
            return;
        case 'End':
            focusLastInput(form);
            return;
        case 'ArrowDown':
            focusVerifyButton(form);
            return;
        default:
            return;
    }
}
