const initialState = false;

const loggedInHandler = (state =initialState, action)=>{
switch(action.type){
    case 'loggedIn' : return state=true;
    case 'loggedOut' : return state=false;
    default :return state;
}
}

export default loggedInHandler