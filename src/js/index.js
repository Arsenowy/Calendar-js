// npm polifils
import "core-js/stable";
import "regenerator-runtime/runtime";

// local
import "../sass/style.scss";

// import * as smt from './';
import { elements } from './base';
import * as window from './window';


/*eslint-disable */
import * as terms from './Terms';

/*eslint-disable */
const saveNdClose = () => {
    window.closeWindow();
    window.getInput();

}



// Add listener to all fields
Array.from(elements.fields).forEach(cur => {
    cur.addEventListener('click', () => {
        //0. Show window with forms
        window.openWindow();

        //1. Close window button
        elements.closeButton.addEventListener('click', window.closeWindow);

        // 2. Add-event button
        elements.submitButton.addEventListener('click', goforit);

    }
)})


// const data1 = elements.submitButton.addEventListener('click', saveNdClose);

        //2. Get data input and hide window


        //3. Save date


        //5. Change field's color and text inside

const goforit = () => {
    let input, newTerm;

    input = window.getInput();

    newTerm = terms.addTerm(
        input.title,
        input.duration,
        input.color
    )

}