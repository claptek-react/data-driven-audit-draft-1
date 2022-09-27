const initialPrctval = {
    loading : false,
    val : [],
    error:''
}


export const getControlDashData = (state=initialPrctval,action)=>{

    switch(action.type){
        case 'getcontroldashreq' : return{
            ...state, loading:true
        }
        
        case 'getcontroldashsuccess' : return{
            loading:false, val:action.payload, error:''
        }

        case 'getcontroldasherror' : return{
            loading:true, val:[], error:action.payload
        }

        default :return state
    }
}



