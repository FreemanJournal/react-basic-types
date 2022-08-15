import React from 'react'
type HeadingProps = {
    children: string
}
export default function Heading({ children }: HeadingProps) {
    return (
        <div>
            <h2>{children}</h2>
        </div>
    )
}
