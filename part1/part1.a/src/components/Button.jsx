import PropTypes from 'prop-types'

const Button = ({ onClick, text }) => <div><button onClick={onClick}>{text}</button></div>

export default Button

Button.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string
}