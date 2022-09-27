import React from 'react'

export const NumberRangeColumnFilter = ({
    column: { filterValue = [], preFilteredRows, setFilter, id },
  }) => {
    const [min, max] = React.useMemo(() => {
        let min = preFilteredRows.length ? preFilteredRows[0].values[id] : 0
        let max = preFilteredRows.length ? preFilteredRows[0].values[id] : 0
        preFilteredRows.forEach(row => {
          min = Math.min(row.values[id], min)
          max = Math.max(row.values[id], max)
 
        })
        return [min, max]
      }, [id, preFilteredRows])
    
      return (
        <div
          style={{
            display: 'flex',
          }}
        >
          <input
            type="date"
            onChange={e => {
              const val = e.target.value
              setFilter((old = []) => [val ? val : undefined, old[1]])
            }}
            placeholder={`Min (${min})`}
            style={{
              width: '10vw',
              marginRight: '0.5rem',
            }}
          />
          to
          <input
            type="date"
            onChange={e => {
              const val = e.target.value
              setFilter((old = []) => [old[0], val ? val : undefined])
            }}
            placeholder={`Max (${max})`}
            style={{
              width: '10vw',
              marginLeft: '0.5rem',
            }}
          />
        </div>
      )
}
