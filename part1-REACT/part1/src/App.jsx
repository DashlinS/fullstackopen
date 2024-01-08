import Header from "./components/Header"
import Total from "./components/Total"
import Content from "./components/Content"
import Button from "./components/Button"
import Display from "./components/Display"
import { useState } from "react"

const App = () => {
  const [counter, setCounter] = useState(0)
  const increaseCounter = () => setCounter(counter + 1)
  const resetCounter = () => setCounter(0)
  const decreaseCounter = () => setCounter(counter > 0 ? counter - 1 : counter)

  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  
  return (
    <div>
      <Header course={course.name} />
      <Content course={course} />
      <Total course={course} />
      <Display counter={counter}/>
      <Button onClick={increaseCounter} text={'+'}/>
      <Button onClick={resetCounter} text={'Reset'}/>
      <Button onClick={decreaseCounter} text={'-'}></Button>
    </div>
  )
}

export default App