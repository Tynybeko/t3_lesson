import React from 'react'
import Button from './UI/Button'
import Card from './products/Card'

export default function Cart({isOpen, setClose, data, setCart}) {
  return (
    <div onClick={setClose} className={`${isOpen ? 'translate-x-0' : "translate-x-full"} duration-300 fixed bg-black/50  w-full top-0 right-0 h-screen flex justify-end`}>
        <div onClick={e => e.stopPropagation()} className='max-w-md w-full bg-white flex flex-col'>
            <div className='flex justify-between'>
                <Button callback={setClose} variant='secondary'>
                <svg className="feather feather-chevron-left" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="15 18 9 12 15 6"/></svg>

                </Button>
                <div className='flex flex-1 pr-2 justify-end  gap-2'>
                <div className='flex font-bold gap-2'>
                    Total count:
                    <p className='text-red-400'>{data.reduce((acc, item) => acc + (item.count || 1), 0)}</p>
                </div>
                <div className='flex font-bold gap-2'>
                    Total sum:
                    <p className='text-red-400'>{data.reduce((acc, item) => acc + item.price * (item.count || 1), 0)}</p>
                </div>
                </div>
            </div>
    <div className='flex-1 overflow-y-auto flex flex-col'>
        {
            data.map(el => (
                <Card setCart={setCart} isCartLayout el={el}/>
            ))
        }
        {
            data.length === 0 && (
                <div className='m-auto flex flex-col gap-2 items-center justify-center flex-1 text-center'>
                    <h1 className='text-2xl font-bold'>Пусто</h1>
                 <svg className="feather feather-inbox w-20 h-20" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/></svg>
                </div>
            )
        }
    </div>
        </div>
    </div>
  )
}
