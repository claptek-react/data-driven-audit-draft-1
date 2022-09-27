import axios from "axios"
import {batch} from 'react-redux'
import { fetchColumn, fetchFieldValue, fetchFormInfoData, fetchNavValue, fetchPrctFieldData, fetchProcessData, fetchSection, fetchTaskColumn, fetchUserAuth, postFields, postMultiFields } from ".."
import { fetchControlDash, fetchDashValue, fetchProcessDash, fetchRiskDash, fetchTestDash } from "../DashActions/DashActions"

export const getApiReq = (apiId) => {
    return{
        type:'getApiReq',
        payload : apiId
    }
}

export const getApiSuccess = (apiId) =>{
    return{
        type:'getApiSuccess',
        payload : apiId
    }
}

export const getApiError = (apiId) =>{
    return{
        type : 'getApiError',
        payload : apiId
    }
}

export const getApiDataReq = (apiId) =>{
    return{
        type : 'getApiDataReq',
        payload : apiId
    }
}

export const getApiDataSuccess = (apiId) =>{
    return{
        type : 'getApiDataSuccess',
        payload : apiId
    }
}

export const getApiDataError = (apiId) =>{
    return{
        type : 'getApiDataError',
        payload : apiId
    }
}

export const fetchApiId = (formId,status,obj,MultiObj)=>{
    return function(dispatch){
        dispatch(getApiReq())
        axios.get(`http://localhost:8080/audit/apiManagement/${formId}`)
        .then((res)=>{
            const prctDt = res.data.map((prctP=>prctP))
            const Sections = prctDt.filter((fil)=>{return fil.objectApiMapping === 'Section'}).map((secRes)=>{return secRes.api})
            const Fields = prctDt.filter((fil)=>{return fil.objectApiMapping === 'Fields'}).map((secRes)=>{return secRes.api})
            const FieldDropdown = prctDt.filter((fil)=>{return fil.objectApiMapping === 'Dropdown'}).map((secRes)=>{return secRes.api})
            const reptApi = prctDt.filter((fil)=>{return fil.objectApiMapping === 'Report'}).map((secRes)=>{return secRes.api})
            const reptColApi = prctDt.filter((fil)=>{return fil.objectApiMapping === 'Column'}).map((secRes)=>{return secRes.api})
            const DashApi = prctDt.filter((fil)=>{return fil.objectApiMapping === 'Dashboard'}).map((dashRes)=>{return dashRes.api   })
            const NavEle = prctDt.filter((fil)=>{return fil.objectApiMapping==='Navbar'}).map((navRes)=>{return navRes.api})
            const userDt = prctDt.filter((fil)=>{return fil.objectApiMapping==='User'}).map((navRes)=>{return navRes.api})
            const submitDt = prctDt.filter((fil)=>{return fil.objectApiMapping==='SubmitForm'}).map((subF)=>{return subF.api})
            const submitMul = prctDt.filter((fil)=>{return fil.objectApiMapping==='SubmitMultirow'}).map((mulRes)=>{return mulRes.api})
            const taskDt = prctDt.filter((fil)=>{return fil.objectApiMapping === 'Task'}).map((taskRes)=>{return taskRes.api})
            const objType  = prctDt.map((objTRes)=>{return objTRes.objectType})
       

            

            objType[0]==='Form' && status === 'SubmitNonMultirow' ? (batch(()=>{
                // dispatch(fetchSection(Sections[0],formId));
                // dispatch(fetchPrctFieldData(Fields[0],formId));
                // dispatch(fetchFieldValue(FieldDropdown[0]));
                dispatch(postFields(submitDt[0],obj))
                // dispatch(postMultiFields(submitMul[0],MultiObj))
            })) : objType[0]==='Form' && status === 'SubmitMultirow' ? (batch(()=>{
                // dispatch(fetchSection(Sections[0],formId));
                // dispatch(fetchPrctFieldData(Fields[0],formId));
                // dispatch(fetchFieldValue(FieldDropdown[0]));
                // dispatch(postFields(submitDt[0],obj))
                dispatch(postMultiFields(submitMul[0],MultiObj))
            })) : objType[0]==='Form' && status === 'FETCH' ? (batch(()=>{
                dispatch(fetchSection(Sections[0],formId));
                dispatch(fetchPrctFieldData(Fields[0],formId));
                dispatch(fetchFieldValue(FieldDropdown[0]));
                // dispatch(postFields(submitDt[0],obj))
                // dispatch(postMultiFields(submitMul[0],MultiObj))
            }))
            
            : (objType[0]==='Report' ? batch(()=>{
                dispatch(fetchProcessData(reptApi[0]));
                dispatch(fetchColumn(reptColApi[0],formId));
            }): (
                objType[0]==='Dashboard' ? batch(()=>{
                    dispatch(fetchProcessDash(DashApi[0]));
                    dispatch(fetchRiskDash(DashApi[1]));
                    dispatch(fetchControlDash(DashApi[2]));
                    dispatch(fetchTestDash(DashApi[3]))
                    dispatch(fetchDashValue(DashApi[4]))
                })  : objType[0] === 'Navbar' ? batch(()=>{
                    dispatch(fetchNavValue(NavEle[0]));
                    dispatch(fetchFormInfoData(NavEle[1]))
                })  : objType[0] == 'User' ? batch(()=>{
                    dispatch(fetchUserAuth(userDt[0]))
                }) : objType[0] ==='Task' ?  batch(()=>{
                    dispatch(fetchProcessData(taskDt[0]));
                    dispatch(fetchTaskColumn(reptColApi[0],formId));
                })  :
                batch(()=>{
                    dispatch(fetchSection())
                    dispatch(fetchPrctFieldData())
                    dispatch(fetchFieldValue())
                    dispatch(fetchProcessData());
                    dispatch(fetchColumn());
                    dispatch(fetchProcessData());
                    dispatch(fetchTaskColumn());
                })
            )
            
            )
            dispatch(getApiSuccess(prctDt))

        })
        .catch((err)=>{
            dispatch(getApiError(err))
        })
    }
}

export const fetchApiData = (Api)=>{
    return function(dispatch){
        dispatch(getApiDataReq())
        axios.get(`${Api}`)
        .then((res)=>{
            const prctDt = res.data.map((prctP=>prctP))
            dispatch(getApiDataSuccess(prctDt))
        })
        .catch((err)=>{
            dispatch(getApiDataError(err))
        })
    }
}

