import React, {useEffect, useMemo} from 'react'
import {useTable,usePagination, useSortBy, useFilters, useGlobalFilter,} from 'react-table'
import './Table.css'
import {batch, useDispatch, useSelector } from 'react-redux'
import GlobalFilter from './GlobalFilter'
import Download from './Download'
import ColumnFilter from './ColumnFilter'
import { useNavigate } from 'react-router-dom'
import { fetchApiId } from '../actions/ApiRepo/GetApiId'


export const Table = ({column,prctvaldata}) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const myPrctState = useSelector((state)=> state.getProcessData);



    const columns = useMemo(() => column, [column])
    const data = useMemo(() => prctvaldata, [prctvaldata]) 

    const defaultColumn = useMemo(
        () => ({
          Filter: ColumnFilter,
        }),
        []
      )  

    const { getTableProps,
        getTableBodyProps,
        headerGroups,
        page, 
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        pageOptions,
        state,
        setGlobalFilter,
        gotoPage,
        pageCount,
        setPageSize,
        prepareRow,
        } = useTable({
               columns,
               data,
               defaultColumn,
        },useFilters,useGlobalFilter,useSortBy,usePagination)

        const {pageIndex,pageSize} = state
        const {globalFilter} = state

        useEffect(()=>{
            setPageSize(10)
        },[])
    
  return (
    <>
    <div style={{display:'inline-block',width:'16vw'}}>
    <GlobalFilter filter={globalFilter} setfilter={setGlobalFilter}/>
    </div>
    <div style={{display:'inline-block'}}>
    <Download/>
    </div>
    <div className='tableDiv'>
    <table {...getTableProps()}>
        <thead>
            {
                headerGroups.map((headerGroups) => (
            <tr {...headerGroups.getHeaderGroupProps()} style={{position:'sticky', top:'0'}}>
                  { 
                  headerGroups.headers.map((column) => (
               <th {...column.getHeaderProps(column.getSortByToggleProps())}>{column.render('Header')}
               <div>
                {column.canFilter ? column.render('Filter') : null}
               </div>
               <div>
               <span>
                {column.isSorted ? (column.isSortedDesc ?  '🔽':'🔼' ):''}
               </span>
               </div>
               </th>
                 ))}
            </tr>
            ))}
        </thead>
        <tbody {...getTableBodyProps()}>
            {page.map((row) => {
                prepareRow(row)
                return (
                <tr {...row.getRowProps()} onClick={()=>{console.log(row.values.formId)}}>
                    {
                     row.cells.map( cell => {
                    return <td {...cell.getCellProps()}>{cell.render('Cell')} </td>
                        }) }
           </tr>
             )
                })}
        </tbody>
        </table>
        </div>
        <div className='paginationDiv'>
            <span>
                Page{' '}
                <strong>
                    {pageIndex + 1} of {pageOptions.length}
                </strong>
            </span>
            <span>
                | GO to Page:{' '}
                <input type="number"
                defaultValue={pageIndex+1}
                onChange={(e)=>{
                    const pageNumber = e.target.value ? Number(e.target.value) -1 : 0
                    gotoPage(pageNumber)
                }}
                style={{width:'50px'}}
                />
            </span>
            <button onClick={()=>gotoPage(0)} disabled={!canPreviousPage} className='btn btn-primary mx-1'>{'<<'}</button>
            <button onClick={()=>previousPage()} disabled={!canPreviousPage} className='btn btn-primary mx-1'>Previous</button>
            <button onClick={()=>nextPage()} disabled={!canNextPage} className='btn btn-primary mx-1'>Next</button>
            <button onClick={()=>gotoPage(pageCount - 1)} disabled={!canNextPage} className='btn btn-primary mx-1'>{'>>'}</button>
        </div>
    </>
  )
}
