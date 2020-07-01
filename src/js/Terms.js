export const terms = () => {

    const Term = (id, title, duration, color) => {
        id,
        title,
        duration,
        color
    }

    const data = {
        allTerms: []
    }
    /*eslint-disable */
    const addTerm = (tit, dur, col) => {

        let newTerm, ID;
        if (data.allTerms.length > 0) {
            ID = data.allTerms[data.allTerms.length - 1].id + 1;
        } else ID = 0;

        newTerm = new Term(ID, tit, dur, col);

        data.allTerms.push(newTerm);
    }
}

