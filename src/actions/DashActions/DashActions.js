import axios from "axios"

export const getProcessDashReq = (getPData)=>{
    return{
        type:'getprocessdashreq',
        payload : getPData
    }
}

export const getProcessDashSuccess = (getPData)=>{
    return{
        type:'getprocessdashsuccess',
        payload : getPData
    }
}

export const getProcessDashError = (getPData)=>{
    return{
        type:'getprocessdasherror',
        payload : getPData
    }
}

export const getRiskDashReq = (getPData)=>{
    return{
        type:'getriskdashreq',
        payload : getPData
    }
}

export const getRiskDashSuccess = (getPData)=>{
    return{
        type:'getriskdashsuccess',
        payload : getPData
    }
}

export const getRiskDashError = (getPData)=>{
    return{
        type:'getriskdasherror',
        payload : getPData
    }
}

export const getControlDashReq = (getPData)=>{
    return{
        type:'getcontroldashreq',
        payload : getPData
    }
}

export const getControlDashSuccess = (getPData)=>{
    return{
        type:'getcontroldashsuccess',
        payload : getPData
    }
}

export const getControlDashError = (getPData)=>{
    return{
        type:'getcontroldasherror',
        payload : getPData
    }
}

export const getTestDashReq = (getPData)=>{
    return{
        type:'gettestdashreq',
        payload : getPData
    }
}

export const getTestDashSuccess = (getPData)=>{
    return{
        type:'gettestdashsuccess',
        payload : getPData
    }
}

export const getTestDashError = (getPData)=>{
    return{
        type:'gettestdasherror',
        payload : getPData
    }
}

export const getDashReq = (dData)=>{
    return{
        type : 'getdashreq',
        payload : dData
    }
}

export const getDashSuccess = (dData)=>{
    return{
        type : 'getdashsuccess',
        payload : dData
    }
}

export const getDashError = (dData) =>{
    return{
        type : 'getdasherror',
        payload : dData
    }
}



export const fetchProcessDash = (api)=>{
    return function(dispatch){
        dispatch(getProcessDashReq())
        axios.get(`${api}`)
        .then((res)=>{
            const prctDt = res.data.map((prctP=>prctP))
            dispatch(getProcessDashSuccess(prctDt))
        })
        .catch((err)=>{
            dispatch(getProcessDashError(err))
        })
    }
}

export const fetchRiskDash = (api)=>{
    return function(dispatch){
        dispatch(getRiskDashReq())
        axios.get(`${api}`)
        .then((res)=>{
            const prctDt = res.data.map((prctP=>prctP))
            dispatch(getRiskDashSuccess(prctDt))
        })
        .catch((err)=>{
            dispatch(getRiskDashError(err))
        })
    }
}

export const fetchControlDash = (api)=>{
    return function(dispatch){
        dispatch(getControlDashReq())
        axios.get(`${api}`)
        .then((res)=>{
            const prctDt = res.data.map((prctP=>prctP))
            dispatch(getControlDashSuccess(prctDt))
        })
        .catch((err)=>{
            dispatch(getControlDashError(err))
        })
    }
}

export const fetchTestDash = (api)=>{
    return function(dispatch){
        dispatch(getTestDashReq())
        axios.get(`${api}`)
        .then((res)=>{
            const prctDt = res.data.map((prctP=>prctP))
            dispatch(getTestDashSuccess(prctDt))
        })
        .catch((err)=>{
            dispatch(getTestDashError(err))
        })
    }
}

export const fetchDashValue = (api) =>{
    return function(dispatch){
        dispatch(getDashReq())
        axios.get(`${api}`)
        .then((res)=>{
            const fVData = res.data.map((fVData=>fVData))
            dispatch(getDashSuccess(fVData))
        })
        .catch((err)=>{
            dispatch(getDashError(err))
        })
    }
}


