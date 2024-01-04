import PropTypes from 'prop-types'

const Display = ({ counter }) => <div><p>Counter: { counter }</p></div>

export default Display

Display.propTypes = {
  counter: PropTypes.number
}