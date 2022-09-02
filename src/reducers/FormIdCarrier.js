const initialId = null;

export const setFormId = (state=initialId,action) =>{
    switch(action.type){
        case 'getformid' : return state = action.payload;
        default : return state
    }
}