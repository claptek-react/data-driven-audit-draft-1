const initialMultiRowVal = [];

export const getMultiRowData = (state=initialMultiRowVal, action)=>{
    switch(action.type){
        case 'multirowcarrier' : return state = action.payload;
        default : return state
    }
}