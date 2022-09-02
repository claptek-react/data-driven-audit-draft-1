const initialPrctval = {
    loading : false,
    val : [],
    error:''
}


export const getColumnData = (state=initialPrctval,action)=>{

    switch(action.type){
        case 'getcolumndatareq' : return{
            ...state, loading:true
        }
        
        case 'getcolumndatasuccess' : return{
            loading:false, val:action.payload, error:''
        }

        case 'getcolumndataerror' : return{
            loading:true, val:[], error:action.payload
        }

        default :return state
    }
}



