
const initialState = 'none';

const navVisibility = (state=initialState,action)=>{
    switch(action.type){
        case 'navenable' :return state='block';
        case 'navdisable' : return state='none';
        default :return state;
    }
}

export default navVisibility