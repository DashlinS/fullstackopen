/* eslint-disable react/prop-types */
import Header from './Header'
import Content from './Content'

function Course({ course }) {
  return (
    <div>
      <Header title={course[0].name}/>
      <Content content={course[0].parts}/>
      <Header title={course[1].name} />
      <Content content={course[1].parts}/>
    </div>
  )
}

export default Course
