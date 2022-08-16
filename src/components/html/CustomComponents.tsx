import React, { ComponentProps } from 'react'
import Greet from '../PassingProps/Greet'

export default function CustomComponents(props:ComponentProps<typeof Greet>) {
  return (
    <div>
        {props.name}
    </div>
  )
}
