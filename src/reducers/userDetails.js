const initialUser = null;

export const setUserDetails = (state=initialUser,action) =>{
    switch(action.type){
        case 'username' : return state = action.payload;
        default : return state
    }
}