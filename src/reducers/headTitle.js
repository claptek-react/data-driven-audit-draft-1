const initialTitle = 'DashBoard'

const toggleTitle = (state=initialTitle,action)=>{
    switch(action.type){
        case 'alltitle' : return action.payload;
        default : return state;
    }

}

export default toggleTitle