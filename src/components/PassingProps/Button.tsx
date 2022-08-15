import React from 'react'
type ButtonProps = {
    handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void
}
export default function Button({ handleClick }: ButtonProps) {
    return (
        <div>
            <button onClick={(event) => handleClick(event, 1)}>Click</button>
        </div>
    )
}
