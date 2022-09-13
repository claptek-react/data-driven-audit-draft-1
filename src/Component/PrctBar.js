import React,{useEffect,useState} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import {Bar} from 'react-chartjs-2'
// import {Chart as ChartJS} from 'chart.js/auto'
import { processRepTitle,sscDisInvis,fetchProcessData,riskRepTitle,fetchRiskData,controlRepTitle,fetchControlData,testRepTitle,fetchTestData, allTitles} from '../actions'

const PrctBar = ({proCount,risCount,conCount,tesCount}) => {
    const dispatch = useDispatch()
    const navigate= useNavigate()
  const [dashLabel, setdashLabel] = useState()
  const [bgColor,setbgColor] = useState()
  const [indexAxis,setindexAxis] = useState([])
  const dashState = useSelector((state)=>state.getDashboardData)

let iAVal;
useEffect(()=>{
  const expensesListResp = async () => {
       setdashLabel(dashState.val.map((res)=>{return res.lables}))
       setbgColor(dashState.val.map((res)=>{return res.background}))
       setindexAxis(dashState.val.map((res)=>{return res}))
    }
  expensesListResp()
},[])

 
  return (
    <>
{bgColor&&<Bar
    data={{
         labels:dashLabel,
        datasets:[
            {
                data: [proCount.length,risCount.length,conCount.length,tesCount.length]
            }
        ]
    }}
    options={{
        indexAxis : indexAxis[0].indexAxis,
        title : {
        },
        plugins: {
            legend: {
            display:false
            }
          },
          backgroundColor:bgColor,

             
    onClick: (e, elements) => {
        if(elements[0].index===0){
          console.log(elements)
        navigate('/Component/PrctRep');dispatch(fetchProcessData())
        }else if(elements[0].index===1){
        navigate('/Component/PrctRep');dispatch(fetchRiskData())
        }else if(elements[0].index===2){
        navigate('/Component/PrctRep');dispatch(fetchControlData())
        }else if(elements[0].index===3){
        navigate('/Component/PrctRep');dispatch(fetchTestData())
        }
        dispatch(allTitles(dashLabel[elements[0].index]))
        dispatch(sscDisInvis());
      },
    }}
    />}
    </>
  )
}

export default PrctBar