
const initialState = 'none';

const navVisibility = (state=initialState,action)=>{
    switch(action.type){
        case 'navenable' :return state='inline';
        case 'navdisable' : return state='none';
        default :return state;
    }
}

export default navVisibility