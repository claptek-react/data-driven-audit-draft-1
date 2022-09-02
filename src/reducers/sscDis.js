const initialVis = 'none';

const changeSscDisplay = (state=initialVis,action)=>{
    switch(action.type){
        case 'sscdisvis' : return state = 'inline-block';
        case 'sscdisinvis' : return state = 'none';
        default :return state;
    }
}

export default changeSscDisplay