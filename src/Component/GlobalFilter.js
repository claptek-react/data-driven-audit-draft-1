import React from 'react'

const GlobalFilter = ({filter, setfilter}) => {
  return (
    <div >
    <span>
        Search :{' '}
        <input className='form-control' style={{width:'15vw',height:'5vh' ,marginBottom:'2vh'}} value={filter || ''}
        onChange = {(e)=> setfilter(e.target.value)}
        placeholder='Search...'
        />
    </span>
    </div>
  )
}

export default GlobalFilter