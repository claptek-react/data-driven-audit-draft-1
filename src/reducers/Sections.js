const initialPrctval = {
    loading : false,
    val : [],
    error:''
}

export const getSectionData = (state=initialPrctval,action)=>{

    switch(action.type){
        case 'getsectionreq' : return{
            ...state, loading:true
        }
        
        case 'getsectionsuccess' : return{
            loading:false, val:action.payload, error:''
        }

        case 'getsectionerror' : return{
            loading:true, val:[], error:action.payload
        }

        default :return state
    }
}

