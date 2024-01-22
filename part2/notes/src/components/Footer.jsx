function Footer() {
  const footerStyle = {
    color: 'green',
    fontStyle: 'italic',
    fontSize: 16
  }

  return (
    <div>
      <div style={footerStyle}>
        <br />
        <em>Note app, Department of Computer Science, university of Helsinki 2023</em>
      </div>
    </div>
  )
}

export default Footer
