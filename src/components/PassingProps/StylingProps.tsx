import React from 'react'
type ContainerProps = {
    styles: React.CSSProperties
}
export default function StylingProps(props: ContainerProps) {
    return (
        <div style={props.styles}>
            <h3>Text content goes here.</h3>
        </div>
    )
}
