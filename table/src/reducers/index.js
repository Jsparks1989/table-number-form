import { combineReducers } from 'redux';




const checkReducer = () => {
    return [
        
    ];
};




const tableNumReducer = (state=[], action) => {
    switch(action.type) {
        case 'ADD_NUMBER':
            return [...state, action.payload ];
        default:
            return state;
    }
}





export default combineReducers({
    checkReducer: checkReducer,
    tableNumReducer: tableNumReducer,

});