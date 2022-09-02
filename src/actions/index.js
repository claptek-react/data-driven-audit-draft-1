import axios from "axios"


export const loggedIn = ()=>{
    return{
        type :'loggedIn'
    }
}

export const loggedOut = ()=>{
    return{
        type: 'loggedOut'
    }
}

export const navEnable = ()=>{
    return{
        type: 'navenable'
    }
}

export const navDisable = ()=>{
    return{
        type: 'navdisable'
    }
}

export const processTitle = ()=>{
    return{
        type:'processtitle'
    }
}

export const riskTitle = ()=>{
    return{
        type:'risktitle'
    }
}

export const controlTitle = ()=>{
    return{
        type:'controltitle'
    }
}

export const testTitle = ()=>{
    return{
        type:'testtitle'
    }
}

export const orgTitle = ()=>{
    return{
        type:'orgtitle'
    }
}

export const userTitle = ()=>{
    return{
        type:'usertitle'
    }
}

export const dashboardTitle = ()=>{
    return{
        type:'dashboardtitle'
    }
}

export const auditplanTitle = ()=>{
    return{
        type:'auditplantitle'
    }
}

export const auditreportTitle = ()=>{
    return{
        type:'auditreportTitle'
    }
}

export const manageauditTitle = ()=>{
    return{
        type:'manageaudittitle'
    }
}

export const workpaperTitle = ()=>{
    return{
        type : 'workpapertitle'
    }
}

export const processRepTitle = ()=>{
    return{
        type: 'processreptitle'
    }
}

export const riskRepTitle = ()=>{
    return{
        type: 'riskreptitle'
    }
}

export const controlRepTitle = ()=>{
    return{
        type: 'controlreptitle'
    }
}

export const testRepTitle = ()=>{
    return{
        type: 'testreptitle'
    }
}

export const allTitles = (ttl)=>{
    return{
        type : 'alltitle',
        payload : ttl
    }
}

export const sscDisVis = ()=>{
    return{
        type:'sscdisvis'
    }
}

export const sscDisInvis = ()=>{
    return{
        type:'sscdisinvis'
    }
}

export const userName = (str)=>{
    return{
        type:'username',
        payload : str,
    }
}

//Form Id Carrier

export const getFormId = (Id)=>{
    return{
        type:'getformid',
        payload : Id,
    }
}

export const getProcessDataReq = (getPData)=>{
    return{
        type:'getprocessdatareq',
        payload : getPData
    }
}

export const getProcessDataSuccess = (getPData)=>{
    return{
        type:'getprocessdatasuccess',
        payload : getPData
    }
}

export const getProcessDataError = (getPData)=>{
    return{
        type:'getprocessdataerror',
        payload : getPData
    }
}


// this is for fetching fields of prct//

export const getPrctFieldReq = (getPData)=>{
    return{
        type:'getprctfieldreq',
        payload : getPData
    }
}

export const getPrctFieldSuccess = (getPData)=>{
    return{
        type:'getprctfieldsuccess',
        payload : getPData
    }
}

export const getPrctFieldError = (getPData)=>{
    return{
        type:'getprctfielderror',
        payload : getPData
    }
}

//this is for section

export const getSectionReq = (getPData)=>{
    return{
        type:'getsectionreq',
        payload : getPData
    }
}

export const getSectionSuccess = (getPData)=>{
    return{
        type:'getsectionsuccess',
        payload : getPData
    }
}

export const getSectionError = (getPData)=>{
    return{
        type:'getsectionerror',
        payload : getPData
    }
}

//This is for Form Info

export const getFormInfoReq = (getPData)=>{
    return{
        type:'getforminforeq',
        payload : getPData
    }
}

export const getFormInfoSuccess = (getPData)=>{
    return{
        type:'getforminfosuccess',
        payload : getPData
    }
}

export const getFormInfoError = (getPData)=>{
    return{
        type:'getforminfoerror',
        payload : getPData
    }
}

export const getColumnDataReq = (getData)=>{
    return{
        type : 'getcolumndatareq',
        payload : getData
    }
}

export const getColumnDataSuccess = (getData)=>{
    return{
        type : 'getcolumndatasuccess',
        payload :getData
    }
}

export const getColumnDataError = (getData)=>{
    return{
        type : 'getcolumndataerror',
        payload : getData
    }
}

export const postFieldDataReq = (postData)=>{
    return{
        type : 'postfielddatareq',
        payload : postData
    }
}

export const postFieldDataSuccess = (postData)=>{
    return{
        type : 'postfielddatasuccess',
        payload : postData
    }
}

export const postFieldDataError = (postData)=>{
    return{
        type : 'postfielddataerror',
        payload : postData
    }
}

export const getFieldValueReq = (fValue)=>{
    return{
        type: 'getfieldvaluereq',
        payload : fValue
    }
}

export const getFieldvalueSuccess = (fValue)=>{
    return{
        type : 'getfieldvaluesuccess',
        payload : fValue
    }
}

export const getFieldValueError = (fValue)=>{
    return{
        type : 'getfieldvalueerror',
        payload : fValue
    }
}

export const getDashboardDataReq = (dVal)=>{
    return{
        type : 'getdashboarddatareq',
        payload : dVal
    }
}

export const getDashboardDataSuccess = (dVal)=>{
    return{
        type : 'getdashboarddatasuccess',
        payload : dVal
    }
}

export const getDashboardDataError = (dVal)=>{
    return{
        type : 'getdashboarddataerror',
        payload : dVal
    }
}



export const fetchProcessData = ()=>{
    return function(dispatch){
        dispatch(getProcessDataReq())
        axios.get('http://localhost:8080/audit/Process')
        .then((res)=>{
            const prctDt = res.data.map((prctP=>prctP))
            dispatch(getProcessDataSuccess(prctDt))
        })
        .catch((err)=>{
            dispatch(getProcessDataError(err))
        })
    }
}



export const fetchRiskData = ()=>{
    return function(dispatch){
        dispatch(getProcessDataReq())
        axios.get('http://localhost:8080/audit/Risk')
        .then((res)=>{
            const prctDt = res.data.map((prctP=>prctP))
            dispatch(getProcessDataSuccess(prctDt))
        })
        .catch((err)=>{
            dispatch(getProcessDataError(err))
        })
    }
}


export const fetchControlData = ()=>{
    return function(dispatch){
        dispatch(getProcessDataReq())
        axios.get('http://localhost:8080/audit/Control')
        .then((res)=>{
            const prctDt = res.data.map((prctP=>prctP))
            dispatch(getProcessDataSuccess(prctDt))
        })
        .catch((err)=>{
            dispatch(getProcessDataError(err))
        })
    }
}

export const fetchTestData = ()=>{
    return function(dispatch){
        dispatch(getProcessDataReq())
        axios.get('http://localhost:8080/audit/Test')
        .then((res)=>{
            const prctDt = res.data.map((prctP=>prctP))
            dispatch(getProcessDataSuccess(prctDt))
        })
        .catch((err)=>{
            dispatch(getProcessDataError(err))
        })
    }
}

export const fetchPrctFieldData = (frmId)=>{
    return function(dispatch){
        dispatch(getPrctFieldReq())
        axios.get(`http://localhost:8080/audit/Field/${frmId}`)
        .then((res)=>{
            const prctDt = res.data.map((prctP=>prctP))
            dispatch(getPrctFieldSuccess(prctDt))
        })
        .catch((err)=>{
            dispatch(getPrctFieldError(err))
        })
    }
} 

export const fetchFormInfoData = ()=>{
    return function(dispatch){
        dispatch(getFormInfoReq())
        axios.get('http://localhost:8080/audit/FormInfo')
        .then((res)=>{
            const prctDt = res.data.map((prctP=>prctP))
            dispatch(getFormInfoSuccess(prctDt))
        })
        .catch((err)=>{
            dispatch(getFormInfoError(err))
        })
    }
} 

export const fetchSection = (frmId)=>{
    return function(dispatch){
        dispatch(getSectionReq())
        axios.get(`http://localhost:8080/audit/FormSection/${frmId}`)
        .then((res)=>{
            const prctDt = res.data.map((prctP=>prctP))            
            dispatch(getSectionSuccess(prctDt))
        })
        .catch((err)=>{
            dispatch(getSectionError(err))
        })
    }
} 

export const fetchColumn = (frmId) =>{
    return function(dispatch){
        dispatch(getColumnDataReq())
        axios.get(`http://localhost:8080/audit/FormConfig/${frmId}`)
        .then((res)=>{
            const colData = res.data.map((colData=>colData))
            dispatch(getColumnDataSuccess(colData))
        })
        .catch((err)=>{
            dispatch(getColumnDataError(err))
        })
    }
}

export const postFields = (frmName,frmObj)=>{
    return function(dispatch){
        dispatch(postFieldDataReq())
        axios.put(`http://localhost:8080/audit/${frmName}`,frmObj)
        .then((res)=>{
            const filData = res.data.map((filData=>filData))
            dispatch(postFieldDataSuccess(filData))
        })
        .catch((err)=>{
            dispatch(postFieldDataError(err))
        })
    }
}

export const fetchFieldValue = () =>{
    return function(dispatch){
        dispatch(getFieldValueReq())
        axios.get(`http://localhost:8080/audit/FieldValue`)
        .then((res)=>{
            const fVData = res.data.map((fVData=>fVData))
            dispatch(getFieldvalueSuccess(fVData))
        })
        .catch((err)=>{
            dispatch(getFieldValueError(err))
        })
    }
}