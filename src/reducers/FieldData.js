const initialFieldVal = {
    loading : false,
    val : [],
    error:''
}

export const postFormdata = (state=initialFieldVal,action) => {

    switch(action.type){
        case 'postfielddatareq' : return{
            ...state, loading:true
        }

        case 'postfielddatasuccess' : return{
            loading:false, val:action.payload, error:''
        }

        case 'postfielddataerror' : return{
            loading:true, val:[], error:action.payload
        }

        default :return state
    }

}

