const initialPrctval = {
    loading : false,
    val : [],
    error:''
}


export const getTaskColumnData = (state=initialPrctval,action)=>{

    switch(action.type){
        case 'gettaskcolumndatareq' : return{
            ...state, loading:true
        }
        
        case 'gettaskcolumndatasuccess' : return{
            loading:false, val:action.payload, error:''
        }

        case 'gettaskcolumndataerror' : return{
            loading:true, val:[], error:action.payload
        }

        default :return state
    }
}



