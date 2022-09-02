const initialPrctval = {
    loading : false,
    val : [],
    error:''
}

export const getPrctFieldData = (state=initialPrctval,action)=>{

    switch(action.type){
        case 'getprctfieldreq' : return{
            ...state, loading:true
        }
        
        case 'getprctfieldsuccess' : return{
            loading:false, val:action.payload, error:''
        }

        case 'getprctfielderror' : return{
            loading:true, val:[], error:action.payload
        }

        default :return state
    }
}

