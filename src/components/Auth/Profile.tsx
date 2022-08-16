import React from 'react'
export type ProfileProps = {
    name: string
}
export default function Profile({ name }: ProfileProps) {

    return (
        <div>
            <h4>Private profile component. Name is {name}</h4>
        </div>
    )
}
