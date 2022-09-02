const initialPrctval = {
    loading : false,
    val : [],
    error:''
}

export const getFormInfoData = (state=initialPrctval,action)=>{

    switch(action.type){
        case 'getforminforeq' : return{
            ...state, loading:true
        }
        
        case 'getforminfosuccess' : return{
            loading:false, val:action.payload, error:''
        }

        case 'getforminfoerror' : return{
            loading:true, val:[], error:action.payload
        }

        default :return state
    }
}

