const initialFieldVal = {
    loading : false,
    val : [],
    error:''
}

export const postMultiFormdata = (state=initialFieldVal,action) => {

    switch(action.type){
        case 'postmultifielddatareq' : return{
            ...state, loading:true
        }

        case 'postmultifielddatasuccess' : return{
            loading:false, val:action.payload, error:''
        }

        case 'postmultifielddataerror' : return{
            loading:true, val:[], error:action.payload
        }

        default :return state
    }

}

