import React from 'react'
// import { Button } from 'antd'
import { login as FacebookLogin } from '../../services/auth'
export default function index() {

  const login = () => {
    FacebookLogin()
  }
  return (
    <div
      style={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <button type="primary" onClick={login}>Connect facebook</button>
    </div >
  )
}
