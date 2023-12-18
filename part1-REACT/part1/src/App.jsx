import Header from "./components/Header"
import Total from "./components/Total"
import Content from "./components/Content"

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10,
  exercises2=7,
  exercises3=14
  const part2 = 'Using props to pass data'
  const part3 = 'State of a component'
  
  const exercises = [exercises1 , exercises2, exercises3]
  
  
  return (
    <div>
      <Header course={course}/>
      <Content exercises={exercises} parts={[part1, part2, part3]}/>
      <Total exercises={exercises}/>
    </div>
  )
}

export default App