import React from 'react'
import { useNavigate } from 'react-router'


const data = [
    {
        id: 1,
        title: 'Helloe'
    },
    {
        id: 2,
        title: 'sadsadsad'
    },
    {
        id: 3,
        title: 'vvcvcv'
    },
]

export default function Product() {
    const navigate = useNavigate()
  return (
    <div>Product

        {
            data.map(el => (
                <div onClick={() => navigate(`/product/${el.id}`)} className='border p-4  hover:bg-red-300'>
                    {el.title}
                </div>
            ))
        }
    </div>
  )
}
