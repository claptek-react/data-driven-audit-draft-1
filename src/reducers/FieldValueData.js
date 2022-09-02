const initialFieldVal = {
    loading : false,
    val : [],
    error:''
}

export const getFieldValueData = (state=initialFieldVal,action) => {

    switch(action.type){
        case 'getfieldvaluereq' : return{
            ...state, loading:true
        }

        case 'getfieldvaluesuccess' : return{
            loading:false, val:action.payload, error:''
        }

        case 'getfieldvalueerror' : return{
            loading:true, val:[], error:action.payload
        }

        default :return state
    }

}

