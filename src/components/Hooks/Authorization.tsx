import React, { useState } from 'react'

export default function Authorization() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = () => { setIsLoggedIn(true) }
  const handleLogout = () => { setIsLoggedIn(false) }
  return (
    <div>
      <button onClick={handleLogin} style={{ marginLeft: "1em", padding: ".5em", fontSize: "2ch"  }}>Log In</button>
      <button onClick={handleLogout} style={{ marginLeft: "1em", padding: ".5em", fontSize: "2ch" }}>Log Out</button>
      <h3>User is {isLoggedIn ? "Logged In" : "Logged Out"}.</h3>
      <h4>User name is {}</h4>
      <h4>User email is {}</h4>
    </div>
  )
}
