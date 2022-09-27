import loggedInHandler from "./loggedIn";
import navVisibility from "./navVis";
import toggleTitle from "./headTitle";
import changeSscDisplay from "./sscDis";
import { setUserDetails } from "./userDetails";
import {combineReducers} from 'redux'
import { getProcessData} from "./prctData";
import { getPrctFieldData } from "./PrctField";
import { getSectionData } from "./Sections";
import { getFormInfoData } from "./FormInfo";
import { setFormId } from "./FormIdCarrier";
import { getColumnData } from "./ColData";
import { postFormdata } from "./FieldData";
import { getFieldValueData } from "./FieldValueData";
import { getDashboardData } from "./DashboardData";
import { getNavElement } from "./NavElement";
import { getUserAuth } from "./UserAuth";
import { getMultiRowData } from "./MultiRowData";
import { postMultiFormdata } from "./PostMultiFields";
import { getApiDataRed } from "./ApiRepoReducer/ApiRepReducer";
import { getProcessDashData } from "./DashReducers/ProcessDash";
import { getRiskDashData } from "./DashReducers/RiskDash";
import { getControlDashData } from "./DashReducers/ControlDash";
import { getTestDashData } from "./DashReducers/TestDash";
import { getTaskColumnData } from "./TaskColData";

const rootReducer = combineReducers({
    loggedInHandler,
    navVisibility,
    toggleTitle,
    changeSscDisplay,
    setUserDetails,
    getProcessData,
    getPrctFieldData,
    getSectionData,
    getFormInfoData,
    setFormId,
    getColumnData,
    postFormdata,
    getFieldValueData,
    getDashboardData,
    getNavElement,
    getUserAuth,
    getMultiRowData,
    postMultiFormdata,
    getApiDataRed,
    getProcessDashData,
    getRiskDashData,
    getControlDashData,
    getTestDashData,
    getTaskColumnData,
})

export default rootReducer