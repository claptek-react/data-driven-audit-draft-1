const initialPrctval = {
    loading : false,
    val : [],
    error:''
}

export const getNavElement = (state=initialPrctval,action)=>{

    switch(action.type){
        case 'getnavelementreq' : return{
            ...state, loading:true
        }
        
        case 'getnavelementsuccess' : return{
            loading:false, val:action.payload, error:''
        }

        case 'getnavelementerror' : return{
            loading:true, val:[], error:action.payload
        }

        default :return state
    }
}

