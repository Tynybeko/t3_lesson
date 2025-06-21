import React, { useEffect, useReducer, useState } from 'react'
import axios from 'axios'
import Button from './components/UI/Button'
import useDebounce from './hooks/useDebounce'
import ConfirmModal from './components/UI/ConfirmModal'
const TODO_URL = `https://67ab161165ab088ea7e899b5.mockapi.io/api/v1/todo`



export default function App() {
  const [newTodo, setNewTodo] = useState('')
  const [confirmModal, setConfirmModal] = useState(false)
  const [search, setSearch] = useState('')
  const [isCompleteds, setCompleteds]  = useState(false)
  const debouncedSearch = useDebounce(search, 500)
  const [loading, setLoading] = useState(false)
  const [data, dispatch] = useReducer((prev, action) => {
    const {type, payload} = action
    switch(type) {
      case 'SET':
        return payload
      case 'SET_SINGLE':
        return prev.map(el => el.id === payload.id ? {...el, ...payload} : el)
      case 'ADD':
        return [payload,...prev]
      case 'DELETE': 
      return prev.filter(el => el.id != payload)

    }
    return prev 
  }, [])

const fetchTodoList = () => {
  setLoading(true)
  axios.get(TODO_URL, {
    params: {
      isCompleted: isCompleteds || null,
      title: debouncedSearch.trim() || null
    }
  })
    .then(res => dispatch({type: 'SET', payload: res.data}))
    .finally(() => setLoading(false))
}

const handleCompeted = (id, completed) => {
  setLoading(true)
  axios.put(TODO_URL + '/' + id, {
    isCompleted: !completed
  })
  .then(res => dispatch({type: 'SET_SINGLE', payload: res.data}))
  .finally(()=> setLoading(false))
}


  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    axios.post(TODO_URL, {title: newTodo, isCompleted: false}, {
        headers: {
          'Content-Type': 'application/json'
        }
    })
      .then(res =>  dispatch({type: 'ADD', payload: res.data}))
      .finally(() => setLoading(false))

  }


  const handleDelete = (id) => {
    setLoading(true)
  axios.delete(TODO_URL + '/' + id)
  .then(res => dispatch({type: 'DELETE', payload: id}))
  .finally(()=> {
    setLoading(false)
    setConfirmModal(false)
  })
  }


useEffect(() => {
  fetchTodoList()
}, [isCompleteds, debouncedSearch])

  return (
    <div>
      {
        loading && <h1 className='fixed top-0 left-0 flex justify-center items-center w-screen bg-white/20 font-bold h-screen  z-50'><div role="status">
        <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
        </svg>
        <span className="sr-only">Loading...</span>
    </div></h1>
      }

      {
        confirmModal &&  <ConfirmModal onCompelte={() => handleDelete(confirmModal)} onClose={() => setConfirmModal(false)} onCancel={() => setConfirmModal(false)} title={'Вы точно хотите удалить список с ID: ' + confirmModal}/>
      }
    

<div className="relative overflow-x-auto">
  <div className='flex gap-2' >
  <form className="max-w-md flex-1">   
    <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input onChange={e => setSearch(e.target.value)} value={search} type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
    </div>
</form>
<form onSubmit={handleSubmit} className="max-w-md flex-1">   
    <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="relative">
        <input required value={newTodo} onChange={e => setNewTodo(e.target.value)} type="search" id="default-search" className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="New todo title..."  />
        <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add</button>
    </div>
</form>
<label className="inline-flex  items-center cursor-pointer">
  <input onChange={e => setCompleteds(e.target.checked)} type="checkbox" checked={isCompleteds} className="sr-only peer"/>
  <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
  <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Сделанные</span>
</label>
  </div>
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Todo Title
                </th>
                <th scope="col" className="px-6 py-3">
                    Is Completed
                </th>
                <th scope="col" className="px-6 py-3">
                    Created At
                </th>
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
          {
data.map(todo => (
  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {todo.title}
                </th>
                <td className="px-6 py-4">
                  <div onClick={() => handleCompeted(todo.id, todo.isCompleted)} className={`${todo.isCompleted ? 'text-green-500' : 'text-red-500'} cursor-pointer`}>
                    {
                      todo.isCompleted ? 'Сделано' : 'Не сделано'
                    }
                  </div>
          
                </td>
                <td className="px-6 py-4">
                    {
                      new Date(todo.createdAt).toLocaleString('RU-ru')
                    }
                </td>
                <td className="px-6 py-4">
                <button onClick={() => setConfirmModal(todo.id)}  className="font-medium text-red-600 dark:text-red-500 hover:underline">Delete</button>
                </td>
            </tr>
))
          }
          

        </tbody>
    </table>
</div>


    </div>
  )
}
