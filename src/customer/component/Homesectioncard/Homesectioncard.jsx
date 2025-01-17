import React from 'react'

export default function Homesectioncard({ product, width, margin }) {
  return (
    <div className={`cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg
    overflow-hidden mx-3 ${margin} ${width}`}>

      <div className='h-[60%px] w-[80%]'>
        <img className='object-cover object-top w-full h-full' src={product.image} alt="" />

      </div>

      <div className="p-4">
        <h3 className='text-lg font-medium text-gray-900'>{product.title}</h3>
        <p className='mt-2 text-sm text-gray-500'>{product.brand}</p>
      </div>

    </div>
  )
}

