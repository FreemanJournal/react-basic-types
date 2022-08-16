import React from 'react'
type ListProps<T> = {
    items:  T[],
    // items: string[] | number[] | Array<string | number>,
    onClick: (value: T) => void
}
 const List = <T extends {id:number,first:string}>({ items, onClick }: ListProps<T>) =>{
//  const List = <T extends string | number>({ items, onClick }: ListProps<T>) =>{
//  const List = <T extends {}>({ items, onClick }: ListProps<T>) =>{
    return (
        <div>
            <h2>List of items</h2>
            {
                items.map((item, index) => {
                    return (
                        <div className="" style={{ cursor: "pointer" }} key={item.id} onClick={() => onClick(item)}>
                            <h4>{item.first}</h4>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default List;
