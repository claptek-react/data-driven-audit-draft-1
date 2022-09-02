import React from 'react'
import { useEffect } from 'react'

const FormFieldsInput = (res) => {

  return (
    Object.entries(res).map(([key, val]) =>
    val.fieldType != 'select'?
    <div className='form-group'>
        <label htmlFor={val.fieldID}>{val.fieldLableValue}</label>
        <input type={val.fieldType} className="form-control" id={val.fieldID}></input>
    </div>
    :
    <div className='form-group'>
        <label htmlFor={val.fieldId}>{val.fieldLableValue}</label><br></br>
        <select id={val.fieldId}></select>
    </div> 
    )
  )
}

export default FormFieldsInput