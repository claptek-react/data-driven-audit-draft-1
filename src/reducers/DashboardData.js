const initialDashVal = {
    loading : false,
    val : [],
    error:''
}

export const getDashboardData = (state=initialDashVal,action) => {

    switch(action.type){
        case 'getdashreq' : return{
            ...state, loading:true
        }

        case 'getdashsuccess' : return{
            loading:false, val:action.payload, error:''
        }

        case 'getdasherror' : return{
            loading:true, val:[], error:action.payload
        }

        default :return state
    }

}

