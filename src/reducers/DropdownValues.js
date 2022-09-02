const initialPrctval = {
    loading : false,
    val : [],
    error:''
}

export const getDropDownData = (state=initialPrctval,action)=>{

    switch(action.type){
        case 'getdropdowndatareq' : return{
            ...state, loading:true
        }
        
        case 'getdropdowndatasuccess' : return{
            loading:false, val:action.payload, error:''
        }

        case 'getdropdowndataerror' : return{
            loading:true, val:[], error:action.payload
        }

        default :return state
    }
}

