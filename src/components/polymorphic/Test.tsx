import React, { ComponentProps, ElementType, ReactNode } from 'react'
type TestOwnProps<E extends ElementType> = {
    size?: 'sm' | 'md' | 'lg'
    color?: 'primary' | 'secondary'
    children: ReactNode,
    as?:E
}

type TestProps<E extends ElementType> = TestOwnProps<E> & Omit<ComponentProps<E>,keyof TestOwnProps<E>>
export default function Test<E extends ElementType = 'div'>({ size, color, children ,as}: TestProps<E>) {
    const Component = as || 'div'
    return (
        <div>
            <Component className={`class-with-${size}-${color}`}>{children}</Component>
        </div>
    )
}
