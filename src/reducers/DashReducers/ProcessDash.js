const initialPrctval = {
    loading : false,
    val : [],
    error:''
}


export const getProcessDashData = (state=initialPrctval,action)=>{

    switch(action.type){
        case 'getprocessdashreq' : return{
            ...state, loading:true
        }
        
        case 'getprocessdashsuccess' : return{
            loading:false, val:action.payload, error:''
        }

        case 'getprocessdasherror' : return{
            loading:true, val:[], error:action.payload
        }

        default :return state
    }
}



