import React from 'react'
import { PersonProps } from './Person.types'

export default function Person({ personName }: PersonProps) {
    return (
        <div>
            <h1>My doctor name is {personName.first} {personName.last}.</h1>
        </div>
    )
}
