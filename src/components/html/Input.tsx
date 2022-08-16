import React, { ComponentProps } from 'react'
type InputProps = ComponentProps<'input'>
export default function CustomInput(props:InputProps) {
  return (
    <div>
      <input type="text" {...props}/>
    </div>
  )
}
