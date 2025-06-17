import React from 'react'
import Button from '../UI/Button'

export default function Card({el, setCart, isCart, isCartLayout = false}) {

    const deleteItem = () => {
        setCart(prev =>    prev.filter(item => item.id != el.id))

    }


    const addItem = () => {
        setCart(prev =>  [...prev, {...el, count: 1}])

    }  
  const incrementCount = () => {
        setCart(prev => prev.map(item => item.id === el.id ? {...item, count: item.count + 1} : item))
    }


    const decrementCount = () => {
        if (el.count <= 1) return deleteItem()
        setCart(prev => prev.map(item => item.id === el.id ? {...item, count: item.count - 1} : item))
    }
  return (
    
<div className=" bg-white flex-[1_0_200px] border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
    <div className="p-5">
        <p>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{el.title}</h5>
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{el.description}</p>
        {
            isCartLayout ?
             <div className='flex gap-2'>
<Button callback={incrementCount} className={'w-5'}>
    +
</Button>
<p className='text-white font-medium'>{el.count}</p>
<Button callback={decrementCount} className={'w-5'}>
    -
</Button>
            </div>
            :
            <Button callback={() => {
                if (!setCart) return
                isCart ? deleteItem() : addItem()
            }} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                {isCart ? 'Buyed' : 'Buy'}
                 <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </Button>
        }
       
    </div>
</div>

  )
}
