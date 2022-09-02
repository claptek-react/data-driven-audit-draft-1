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
          console.log('min = ' + min)
          console.log('max = ' + max)
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
              console.log('This is val input one'+val)
              setFilter((old = []) => [val ? val : undefined, old[1]])
              console.log(min)
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
              console.log('Thi is val input one'+ val)
              setFilter((old = []) => [old[0], val ? val : undefined])
              console.log(max)
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
