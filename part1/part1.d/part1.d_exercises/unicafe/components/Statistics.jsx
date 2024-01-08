/* eslint-disable react/prop-types */
import StatisticLine from './StatisticLine'

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
        <>
          <StatisticLine text={'Good'} value={stats.good}/>
          <StatisticLine text={'Neutral'} value={stats.neutral}/>
          <StatisticLine text={'Bad'} value={stats.bad}/>
          <StatisticLine text={'All'} value={stats.all}/>
          <StatisticLine text={'Average'} value={stats.all / 3}/>
          <StatisticLine text={'Positive'} value={stats.positive}/>  
        </>
        )
      }
    </>
  )
}

export default Statistics
