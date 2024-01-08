/* eslint-disable react/prop-types */
function Button({text, onHandleClick}) {
  return (
    <div>
      <button onClick={onHandleClick}>{text}</button>
    </div>
  )
}

export default Button
