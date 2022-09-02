import React,{useEffect,useState} from 'react'
import { useDispatch } from 'react-redux'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import {Bar} from 'react-chartjs-2'
// import {Chart as ChartJS} from 'chart.js/auto'
import { processRepTitle,sscDisInvis,fetchProcessData,riskRepTitle,fetchRiskData,controlRepTitle,fetchControlData,testRepTitle,fetchTestData} from '../actions'

const PrctBar = () => {
    const dispatch = useDispatch()
    const navigate= useNavigate()
    const [proCount, setproCount] = useState()
  const [risCount,setrisCount] = useState()
  const [conCount, setconCount] = useState()
  const [tesCount,settesCount] = useState()

useEffect(()=>{
  const expensesListResp = async () => {
      const ProcessCount = await axios.get('http://localhost:8080/audit/Process')
      const RiskCount = await axios.get('http://localhost:8080/audit/Risk')
      const ControlCount = await axios.get('http://localhost:8080/audit/Control')
      const TestCount = await axios.get('http://localhost:8080/audit/Test')
       setproCount(ProcessCount.data)
       setrisCount(RiskCount.data)
       setconCount(ControlCount.data)
       settesCount(TestCount.data)
    }
  expensesListResp()
},[])


 
  return (
    <>
{proCount&&<Bar
    data={{
        labels:['Process','Risk','Control','Test'],
        datasets:[
            {
                data: [proCount.length,risCount.length,conCount.length,tesCount.length]
            }
        ]
    }}
    options={{
        indexAxis :'y',
        title : {
            display : true,
            text : 'Sample Data',
        },
        plugins: {
            legend: {
            display:false
            }
          },
          backgroundColor:['#0d6efd','yellow','orange','pink'],

             
    onClick: (e, elements) => {
        if(elements[0].index===0){
        navigate('/Component/PrctRep');dispatch(processRepTitle())&&dispatch(sscDisInvis())&&dispatch(fetchProcessData())
        }else if(elements[0].index===1){
        navigate('/Component/PrctRep');dispatch(riskRepTitle())&&dispatch(sscDisInvis())&&dispatch(fetchRiskData())
        }else if(elements[0].index===2){
        navigate('/Component/PrctRep');dispatch(controlRepTitle())&&dispatch(sscDisInvis())&&dispatch(fetchControlData())
        }else if(elements[0].index===3){
        navigate('/Component/PrctRep');dispatch(testRepTitle())&&dispatch(sscDisInvis())&&dispatch(fetchTestData())
        }
      },
    }}
    style={{height:'40vh', width:'40vw'}}
    />}
    </>
  )
}

export default PrctBar