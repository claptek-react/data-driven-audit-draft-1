import './App.css';
import NavBar from './Component/NavBar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import User from './Component/User';
import Org from './Component/Org';
import LoginPage from './Component/LoginPage';
import Dashboard from './Component/Dashboard';
import AuditPlan from './Component/AuditPlan';
import ManageAudit from './Component/ManageAudit';
import ProtectedRoute from './Component/ProtectedRoute';
import {useSelector} from 'react-redux'
import { WorkPaper } from './Component/WorkPaper';
import { AuditReport } from './Component/AuditReport';
import PrctRep from './Component/PrctRep';
import PrctForms from './Component/PrctForms';


function App() {
  const myState = useSelector((state)=>state.loggedInHandler)
  return (
    <>
    <Router>
    <div>
      <Routes>
        <Route path='/' element={<LoginPage/>}/>
        </Routes>
        <NavBar/>
        <Routes>
        <Route element={<ProtectedRoute isLogged={myState}/>}>
        <Route path='/Component/AuditReport' element={<AuditReport/>}/>    
        <Route path='/Component/AuditPlan' element={<AuditPlan/>}/>
        <Route path='/Component/ManageAudit' element={<ManageAudit/>}/>
        <Route path='/Component/WorkPaper' element={<WorkPaper/>}/>
        <Route path='/Component/DashBoard' element={<Dashboard/>}/>
        <Route path = '/Component/NavBar' element={<NavBar/>}/>
        <Route path='/Component/User' element={<User/>}/>
        <Route path = '/Component/Org' element={<Org/>}/>
        <Route path='/Component/PrctRep' element={<PrctRep/>}/>
        <Route path='/Component/PrctForms' element={<PrctForms/>}/>
        </Route>
      </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
