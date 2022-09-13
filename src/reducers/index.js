import loggedInHandler from "./loggedIn";
import navVisibility from "./navVis";
import toggleTitle from "./headTitle";
import changeSscDisplay from "./sscDis";
import { setUserDetails } from "./userDetails";
import {combineReducers} from 'redux'
import { getProcessData,getRiskData, getControlData,getTestData,} from "./prctData";
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
import { getArmdata } from "./ArmData";
import { getMultiRowData } from "./MultiRowData";
import { postMultiFormdata } from "./PostMultiFields";

const rootReducer = combineReducers({
    loggedInHandler,
    navVisibility,
    toggleTitle,
    changeSscDisplay,
    setUserDetails,
    getProcessData,
    getRiskData,
    getControlData,
    getTestData,
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
    getArmdata,
    getMultiRowData,
    postMultiFormdata,
})

export default rootReducer