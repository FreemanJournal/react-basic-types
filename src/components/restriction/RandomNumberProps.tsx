import React from 'react'

type RandomNumberType = {
    value:number
}
type PositiveNumber = RandomNumberType & {
    isPositive:boolean
    isNegative?:never
    isZero?:never
}
type NegativeNumber = RandomNumberType & {
    isPositive?:never
    isNegative:boolean
    isZero?:never

}
type ZeroNumber = RandomNumberType & {
    isPositive?:never
    isNegative?:never
    isZero:boolean
}
type RandomNumberProps = PositiveNumber | NegativeNumber | ZeroNumber
// type RandomNumberProps = {
//     value: number,
//     isPositive?: boolean,
//     isNegative?: boolean,
//     isZero?: boolean
// }
export default function RandomNumber({ value, isPositive, isNegative, isZero }: RandomNumberProps) {
    return (
        <div>
            <h3>{value} {isPositive && 'positive'} {isNegative && 'negative'} {' '}</h3>
            <h3>{isZero && 'zero'}</h3>
        </div>
    )
}
