import React from 'react'


const variants = {
  primary: `text-red-400 bg-white rounded-lg border-2 border-blue-400 shadow-sm`,
  secondary: `text-blue-400 bg-red-400  border-2 border-blue-400 shadow-sm`,
  filled: `text-blue-400 bg-red-400  border-2 border-blue-400 shadow-sm`,
  outline: `text-blue-400 bg-red-400  border-2 border-blue-400 shadow-sm`,
}

export default function Button({callback, className, variant = 'primary', children, disabled}) {

  return (
    <button disabled={disabled}  className={`cursor-pointer disabled:cursor-auto disabled:bg-gray-400  ${variants[variant]} ${className || ''}`} onClick={callback} >
        {
          children
        }
    </button>
  )
}
