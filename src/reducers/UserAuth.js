const initialPrctval = {
    loading : false,
    val : [],
    error:''
}

export const getUserAuth = (state=initialPrctval,action)=>{

    switch(action.type){
        case 'getuserauthreq' : return{
            ...state, loading:true
        }
        
        case 'getuserauthsuccess' : return{
            loading:false, val:action.payload, error:''
        }

        case 'getuserautherror' : return{
            loading:true, val:[], error:action.payload
        }

        default :return state
    }
}

