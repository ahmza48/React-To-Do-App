import React from 'react'

const Footer = () => {
  let footerStyle={
    position:"sticky",
    top:"100vh",
    width:"100%"

  }
  return (
    <footer className='bg-dark text-light py-3' style={footerStyle}>
      <p className="text-center">
        Copyright &copy; MyTodosList.com
      </p>
    </footer>
  )
}

export default Footer
