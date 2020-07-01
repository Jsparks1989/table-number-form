import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';


const tableNumReducer = (state=[], action) => {
    switch(action.type) {
        case 'ADD_NUMBER':
            return [...state, action.payload];
        case 'BKSP_NUMBER':
            //-- Use array.filter. Use array[array.length-1] to target the last array element.
            return state.filter(());
        case 'DELETE_NUMBER':
            return state=[];
        default:
            return state;
    }
};


const tableNumButtons = () => {
    return [
        {
            number: 1
        },
        {
            number: 2
        },
        {
            number: 3
        },
        {
            number: 4
        },
        {
            number: 5
        },
        {
            number: 6
        },
        {
            number: 7
        },
        {
            number: 8
        },
        {
            number: 9
        },
        {
            number: 0
        },
    ];
}



// const changeNumReducer = (state=[], action) => {
//     switch(action.type) {
//         case 'ADD_NUMBER':
//             return [...state, action.payload ];
//         default:
//             return state;
//     }
// }





export default combineReducers({
    //changeNumReducer: changeNumReducer,
    tableNumReducer: tableNumReducer,
    tableNumButtons: tableNumButtons,
    form: formReducer
});