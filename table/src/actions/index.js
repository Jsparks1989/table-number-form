

export const addNum = (num) => {
    return {
        type: 'ADD_NUMBER',
        payload: num
    };
};


export const deleteNum = (num) => {
    return {
        type: 'DELETE_NUMBER',
        payload: num
    };
};


export const sendNum = (num) => {
    return {
        type: 'SEND_NUMBER',
        payload: num
    };
};


