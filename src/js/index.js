// npm polifils
import "core-js/stable";
import "regenerator-runtime/runtime";

// local
import "../sass/style.scss";

// import * as smt from './';
import { elements } from './base';
import * as window from './window';




// Add listener to all fields
Array.from(elements.fields).forEach(cur => {
    cur.addEventListener('click', field => {
        //delete this later
        field.target.classList.toggle('red');

        //for testing
        window.openWindow();

        //1. Show window with forms //ui
        //2. get data and save it in object  //controller
        //3. Hide window //ui

        elements.closeButton.addEventListener('click', window.closeWindow);

        //4. Change field's color and text inside
    }
)})