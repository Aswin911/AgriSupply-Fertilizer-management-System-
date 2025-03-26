import React from 'react'
import authServices from '../services/authService'

function Register() {
  const register = async (username, password, role, security_question, answer) => {
    const result = await authServices.register({ username, password, role, security_question, answer })
    console.log(result);
  }

  return (
    <div>Register</div>
  )
}

export default Register