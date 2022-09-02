import React from 'react'

const ColumnFilter = ({column}) => {
  const {filterValue, setFilter} = column
  return (
    <div >
    <span>
        <input className='form-control' style={{width:'10vw',height:'5vh'}} value={filterValue}
        onChange = {(e)=> setFilter(e.target.value)}
        placeholder='Search...'
        />
    </span>
    </div>
  )
}

export default ColumnFilter