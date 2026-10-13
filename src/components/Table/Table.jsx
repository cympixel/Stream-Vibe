import './Table.scss';

export default (props) => {

  const {className, headCells=[], rows=[]} = props


  return (
    <table className={className}>
      {headCells.length > 0 && (
        <thead>
          <tr>
            {headCells.map(({children, width}, index)=>(
              <th width={width} key={index}>
                {children}
              </th>
            ) )}
          </tr>
        </thead>
      )}
      <tbody>
        {rows.map(({cells}, index)=>(
          <tr key={index}>
            {cells.map((cell, cellIndex)=>(
              <td key={cellIndex}>
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

