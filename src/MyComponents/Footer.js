import React from 'react'

export const Footer = () => {

  const footerStyle = {
    position: "relative",
    width: "100%",
    top: "0",
    left: "0"
  }
  return (
    <footer className='bg-dark text-light py-3 ' style={footerStyle}>
      <p className='text-center'>
      Copyright &copy; MyTodoList.com
      </p>
    </footer>
  )
}
