// npm polifils
import "core-js/stable";
import "regenerator-runtime/runtime";

// local
import "../sass/style.scss";

// import * as smt from './';



const fields = document.querySelectorAll('.grid__hours--full');

// Add listener to all fields
Array.from(fields).forEach(cur => {
    cur.addEventListener('click', field => {
        //delete this later
        field.target.classList.toggle('red');

        //1. Show window with forms //ui
        //2. get data and save it in object  //controller
        //3. Hide window //ui
        //4. Change field's color and text inside
    }
)})