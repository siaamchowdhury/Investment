import React from 'react'

const ResultTable = (props) => {


  return (
    <table className='result'>
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Saving</th>
          <th>Interest(Year)</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {props.items.map((item) => (
          <tr>
            <td>{item.year}</td>
            <td>{item.yearlyInterest}</td>
            <td>{item.savingsEndOfYear}</td>
            <td>{item.yearlyContribution}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}


export default ResultTable