const initialPrctval = {
    loading : false,
    val : [],
    error:''
}


export const getTestDashData = (state=initialPrctval,action)=>{

    switch(action.type){
        case 'gettestdashreq' : return{
            ...state, loading:true
        }
        
        case 'gettestdashsuccess' : return{
            loading:false, val:action.payload, error:''
        }

        case 'gettestdasherror' : return{
            loading:true, val:[], error:action.payload
        }

        default :return state
    }
}



