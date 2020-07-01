import { elements } from './base';

export const closeWindow = () => {
    elements.window.style.opacity = '0';
    elements.window.style.visibility = 'hidden';
}

export const openWindow = () => {
    elements.window.style.visibility = 'visible';
    elements.window.style.opacity = '1';
}

export const getInput = () => {
    return {
        title: elements.formTitle.value,
        duration: elements.formDuration1.value,
        color: elements.formColor.value
    }
}