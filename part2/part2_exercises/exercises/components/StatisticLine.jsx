/* eslint-disable react/prop-types */
function StatisticLine({text, value}) {
  return (
    <table>
      <tbody>
        <tr>
          <td>{text}</td>
          <td>{value}</td>
        </tr>
      </tbody>
    </table>
  )
}

export default StatisticLine
