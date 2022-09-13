const initialPrctval = {
    loading : false,
    val : [],
    error:''
}


export const getArmdata = (state=initialPrctval,action)=>{

    switch(action.type){
        case 'apirepomanagereq' : return{
            ...state, loading:true
        }
        
        case 'apirepomanagesuccess' : return{
            loading:false, val:action.payload, error:''
        }

        case 'apirepomanageerror' : return{
            loading:true, val:[], error:action.payload
        }

        default :return state
    }
}



