const initialPrctval = {
    loading : false,
    val : [],
    error:''
}

export const getProcessData = (state=initialPrctval,action) => {

    switch(action.type){
        case 'getprocessdatareq' : return{
            ...state, loading:true
        }

        case 'getprocessdatasuccess' : return{
            loading:false, val:action.payload, error:''
        }

        case 'getprocessdataerror' : return{
            loading:true, val:[], error:action.payload
        }

        default :return state
    }

}

export const getRiskData = (state=initialPrctval,action)=>{

    switch(action.type){
        case 'getprocessdatareq' : return{
            ...state, loading:true
        }

        case 'getprocessdatasuccess' : return{
            loading:false, val:action.payload, error:''
        }

        case 'getprocessdataerror' : return{
            loading:true, val:[], error:action.payload
        }

        default :return state
    }
}

export const getControlData = (state=initialPrctval,action)=>{

    switch(action.type){
        case 'getprocessdatareq' : return{
            ...state, loading:true
        }

        case 'getprocessdatasuccess' : return{
            loading:false, val:action.payload, error:''
        }

        case 'getprocessdataerror' : return{
            loading:true, val:[], error:action.payload
        }

        default :return state
    }
}

export const getTestData = (state=initialPrctval,action)=>{

    switch(action.type){
        case 'getprocessdatareq' : return{
            ...state, loading:true
        }
        
        case 'getprocessdatasuccess' : return{
            loading:false, val:action.payload, error:''
        }

        case 'getprocessdataerror' : return{
            loading:true, val:[], error:action.payload
        }

        default :return state
    }
}



