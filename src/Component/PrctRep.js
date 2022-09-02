import React,{useEffect,useState}from 'react'
import { Table } from './Table'
import Head from './Head'
import { prctColoumns} from './column';
import { useDispatch, useSelector} from 'react-redux';
import'./Dashboard.css'
import Loader from './Loader';
import { SelectColumnFilter } from './SelectColumnFilter';
import ColumnFilter from './ColumnFilter';
import { NumberRangeColumnFilter } from './NumberRangeColumnFilter';


const PrctRep = () => {
  var myPrctState = useSelector((state)=> state.getProcessData);
  var mycolState = useSelector((state)=>state.getColumnData)
  const [prop, setprop] = useState()
  const [col, setcol] = useState()



let colArray;
useEffect(()=>{
  colArray = mycolState.val.map((res)=>{
    return {'Header' : res.fieldName,'accessor': res.accessor,'Filter' :   res.columnFilter !== 'date' ? ColumnFilter : NumberRangeColumnFilter, 'filter' : 'between'}
  })
},[myPrctState])

useEffect(()=>{
  setcol(colArray)
  setprop(myPrctState.val);
},[myPrctState])

  return (
    <>
    <Head Btn1='Save' Btn2='Submit' Btn3='Close'/>
    <div style={{height:'50vh',width:'50vw',marginLeft:'12px',marginTop:'-1vh'}}>
    <div style={{marginBottom:'2vh'}}>
    </div>{
    }
    <div>
    <div style={{marginBottom:'1vh'}}>
    </div>
    {myPrctState.loading ? <Loader/> : <Table column={col} prctvaldata={prop}/>}
    </div>
    </div>
    </>
  )
}

export default PrctRep