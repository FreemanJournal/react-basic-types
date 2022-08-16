import React, { useContext, useState } from 'react'
import { UserContext } from './UserContext'


export default function User() {
    const userContext = useContext(UserContext)
    const handleLogin = () => {
        userContext.setUser({
            name: "Viswas",
            email: "shakil@admin.com"
        })
    }
    const handleLogout = () => {
        userContext.setUser(null)

    }
    return (
        <div>
            <button onClick={handleLogin} style={{ marginLeft: "1em", padding: ".5em", fontSize: "2ch" }}>Log In</button>
            <button onClick={handleLogout} style={{ marginLeft: "1em", padding: ".5em", fontSize: "2ch" }}>Log Out</button>
            <h4>User name is {userContext.user?.name}</h4>
            <h4>User email is {userContext.user?.email}</h4>
        </div>
    )
}
