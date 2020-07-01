import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';




const tableNumReducer = () => {
    return [

    ];
};




const changeNumReducer = (state=[], action) => {
    switch(action.type) {
        case 'ADD_NUMBER':
            return [...state, action.payload ];
        default:
            return state;
    }
}





export default combineReducers({
    changeNumReducer: changeNumReducer,
    tableNumReducer: tableNumReducer,
    form: formReducer
});