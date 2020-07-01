

export const addNum = (num) => {
    return {
        type: 'ADD_NUMBER',
        payload: num
    };
};

export const bkspNum = () => {
    return {
        type: 'BKSP_NUMBER'
    }
}


export const deleteNum = () => {
    return {
        type: 'DELETE_NUMBER'
    };
};


export const submitNum = (num) => {
    return {
        type: 'SUBMIT_NUMBER',
        payload: num
    };
};


