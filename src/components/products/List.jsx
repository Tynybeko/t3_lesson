import React from 'react'
import Button from '../UI/Button'
import Card from './Card'


const resData = [
    {
        id: 1,
        title: 'Joy',
        price: 120,
        description:`
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, harum dicta? Perferendis dolor alias consequuntur fugit omnis earum magni maxime laboriosam libero, suscipit incidunt pariatur obcaecati eligendi accusamus, cum minima.
        `
    },
    {
        id: 4,
        title: 'Jack',
        price: 430,
        description:`
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, harum dicta? Perferendis dolor alias consequuntur fugit omnis earum magni maxime laboriosam libero, suscipit incidunt pariatur obcaecati eligendi accusamus, cum minima.
        `
    },
    {
        id: 2,
        title: 'Boy',
        price: 214,
        description:`
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, harum dicta? Perferendis dolor alias consequuntur fugit omnis earum magni maxime laboriosam libero, suscipit incidunt pariatur obcaecati eligendi accusamus, cum minima.
        `
    },
    {
        id: 3,
        title: 'Toy',
        price: 542,
        description:`
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, harum dicta? Perferendis dolor alias consequuntur fugit omnis earum magni maxime laboriosam libero, suscipit incidunt pariatur obcaecati eligendi accusamus, cum minima.
        `
    },
]
export default function List({setCart, cartData}) {
  return (
    <div className='flex gap-2 flex-wrap '>
        {
            resData.map(el => (
                <Card isCart={cartData.some(item => item.id == el.id)} setCart={setCart} el={el}/>
            ))
        }
    </div>
  )
}
