const initialPrctval = {
    loading : false,
    val : [],
    error:''
}


export const getApiDataRed = (state=initialPrctval,action)=>{

    switch(action.type){
        case 'getApiReq' : return{
            ...state, loading:true
        }
        
        case 'getApiSuccess' : return{
            loading:false, val:action.payload, error:''
        }

        case 'getApiError' : return{
            loading:true, val:[], error:action.payload
        }

        default :return state
    }
}



