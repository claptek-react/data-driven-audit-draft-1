import React from 'react'
import { useEffect } from 'react';
import Loader from './Loader';

const FormFieldsDropdown = (res) => {
    useEffect(() => {
      Object.entries(res).map(([key, val]) => 
      console.log('Inside FormFieldsDropdown res key = ' + key + ' val = ' + val.fieldID)
      )
    },[res])
  return (
    Object.entries(res).map(([key, val]) =>
    <div className='form-group'>
    <label htmlFor={val.fieldId}>{val.fieldLableValue}</label>
    <select id={val.fieldId}></select>
  </div> 
    )
  )
}

export default FormFieldsDropdown