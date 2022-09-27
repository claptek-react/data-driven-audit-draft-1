const initialPrctval = {
    loading : false,
    val : [],
    error:''
}


export const getRiskDashData = (state=initialPrctval,action)=>{

    switch(action.type){
        case 'getriskdashreq' : return{
            ...state, loading:true
        }
        
        case 'getriskdashsuccess' : return{
            loading:false, val:action.payload, error:''
        }

        case 'getriskdasherror' : return{
            loading:true, val:[], error:action.payload
        }

        default :return state
    }
}



