import React,{useEffect,useState} from 'react'
import axios from 'axios'
import {Doughnut} from 'react-chartjs-2'
// import {Chart as ChartJS} from 'chart.js/auto'
import { useDispatch,useSelector } from 'react-redux'
import {useNavigate} from 'react-router-dom'

const PrctDonut = ({proCount,risCount,conCount,tesCount}) => {
  const dispatch = useDispatch()
  const navigate= useNavigate()
  const [dashLabel, setdashLabel] = useState()
  const [bgColor,setbgColor] = useState()
  const [legPosAlign,setlegPosAlign] = useState()
  const dashState = useSelector((state)=>state.getDashboardData)



useEffect(()=>{
  const expensesListResp = async () => {
       setdashLabel(dashState.val.map((res)=>{return res.lables}))
       setbgColor(dashState.val.map((res)=>{return res.background}))
       setlegPosAlign(dashState.val.map((res)=>{return res}))
    }
  expensesListResp()
},[])


 
  return (
    <>
{ legPosAlign&&<Doughnut 
data={{
    labels:dashLabel,
    datasets:[
        {
            data: [proCount.length,risCount.length,conCount.length,tesCount.length]
        }
    ]
}}
options={{
  plugins: {
    legend: {
      position: legPosAlign[0].legendPos,
      align: legPosAlign[0].legendAlign
    }
  },
  backgroundColor:bgColor,
  // onClick: (e, elements) => {
  //   if(elements[0].index===0){
  //   navigate('/Component/PrctRep');dispatch(fetchProcessData())
  //   }else if(elements[0].index===1){
  //   navigate('/Component/PrctRep');dispatch(fetchRiskData())
  //   }else if(elements[0].index===2){
  //   navigate('/Component/PrctRep');dispatch(fetchControlData())
  //   }else if(elements[0].index===3){
  //   navigate('/Component/PrctRep');dispatch(fetchTestData())
  //   }
  //   dispatch(allTitles(dashLabel[elements[0].index]))
  //   dispatch(sscDisInvis());
  // },

}}
/>}
    </>
  )
}

export default PrctDonut