/* eslint-disable react/prop-types */
function Statistics({stats}) {
  return (
    <>
      <h2>Statistics</h2>
      {
        !stats.all ? (
          <p>{stats.empty}</p>
        )
       :
       (
        <div>
          <p>Good {stats.good}</p>
          <p>Neutral {stats.neutral}</p>
          <p>Bad {stats.bad}</p>
          <p>All {stats.all}</p>
          <p>Average {stats.all / 3}</p>
          <p>Positive {stats.positive > 0 ? stats.positive : 0} %</p>
        </div>
        )
      }
    </>
  )
}

export default Statistics
