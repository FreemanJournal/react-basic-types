import React, { useState } from 'react'

type AuthUser = {
    name: string,
    email: string
}
export default function User() {
    // const [user, setUser] = useState<AuthUser>({} as AuthUser);
    const [user, setUser] = useState<AuthUser | null>(null);
    const handleLogin = () => { setUser({
        name:"Viswas",
        email:"viswash@gmail.com"
    }) }
    const handleLogout = () => { setUser(null) }
    return (
        <div>
            <button onClick={handleLogin} style={{ marginLeft: "1em", padding: ".5em", fontSize: "2ch" }}>Log In</button>
            <button onClick={handleLogout} style={{ marginLeft: "1em", padding: ".5em", fontSize: "2ch" }}>Log Out</button>
            <h4>User name is {user?.name }</h4>
            <h4>User email is { user?.email}</h4>
        </div>
    )
}
