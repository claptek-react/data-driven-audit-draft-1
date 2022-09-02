import React, { useRef} from 'react'
import {useNavigate} from 'react-router-dom'
import './Login.css'
import { useDispatch,useSelector } from 'react-redux';
import { dashboardTitle,  fetchFormInfoData,  loggedIn, loggedOut, navDisable, navEnable,sscDisInvis,userName } from '../actions';

const LoginPage = () => {
  const dispatch = useDispatch()


  let navigate = useNavigate();
  let chkUser  = useRef();
  let chkPass  = useRef();


  const username = ['vishal','swapnali','akhilesh','neham','nehas','madhur']
  const password = ['vishal','swapnali','akhilesh','neham','nehas','madhur']

  const handleLogIn = ()=>{
    let userValue = chkUser.current.value;
    let passValue = chkPass.current.value;
    dispatch(userName(userValue));
    if(username.includes(userValue) && password.includes(passValue)){
      return(
      dispatch(navEnable())&&dispatch(loggedIn())&&dispatch(dashboardTitle())&&dispatch(sscDisInvis())&&navigate('/Component/Dashboard')
      )
    }
    else{
      return (
      dispatch(navDisable())&& dispatch(loggedOut())&&navigate('/'),
      alert('Invalid Username or password')
      )
    }
  }


  return (
    <>
 <div className='div1'>
    <form action="" className='frm'>
        <h4 className="signintxt">Sign In</h4>
        <div className='emailDiv'>
        <input type="text" className="form-control" id="User" placeholder="Username..." ref={chkUser}/>
        </div>
        <div className='passDiv'>
        <input type="password" className="form-control" id="password" placeholder="Password..." ref={chkPass}/>
        </div>
        <button type="submit" className='sbtn btn btn-primary' onClick={handleLogIn}>Sign In</button>
        <a href="#" className="forgotPass">Forgot Password?</a>
        <a href="#" className="forgotUser">Forgot UserName?</a>
    </form>
 </div>
    </>
  )
}

export default LoginPage