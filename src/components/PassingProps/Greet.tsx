import React from 'react'

type GreetProps = {
    name: string,
    messageCount?: number, // ? - optional props
    isLoggedIn: boolean
}
export default function Greet({ name, messageCount = 0, isLoggedIn }: GreetProps) {
    return (
        <div className="">
            {
                isLoggedIn ? <h2>Greet from typescript,{name}.You have {messageCount} unread messages.</h2>
                    : <h2>Welcome Guest</h2>
            }

        </div>
    )
}
