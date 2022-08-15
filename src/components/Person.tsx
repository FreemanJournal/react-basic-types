import React from 'react'
type PersonProps = {
    personName: {
        first: string,
        last: string
    }
}
export default function Person({ personName }: PersonProps) {
    return (
        <div>
            <h1>My doctor name is {personName.first} {personName.last}.</h1>
        </div>
    )
}
