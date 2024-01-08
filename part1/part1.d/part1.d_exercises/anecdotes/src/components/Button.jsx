/* eslint-disable react/prop-types */

function Button(props) {
  return (
    <div>
      <button style={{marginTop: '20px'}} onClick={props.handleClick}>
        {props.text}
      </button>
    </div>
  )
}

export default Button
