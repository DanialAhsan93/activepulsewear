import React from 'react';
import './productcard.css';
import { useNavigate } from 'react-router-dom';

export default function Productcard({product}) {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(`/product/${5}`)} className='productcard w-[13rem] m-3 transition-all cursor-pointer border border-1'>
      <div className='h-[15rem] '>
        <img className='w-full h-full ' src={product.image} alt="" />
      </div>

      <div className='text-part bg-white p-3'>
        <div>
          <p className='font-bold opacity-60'>Active pulse wear</p>
          <p>{product.title}</p>
        </div>

        <div className='flex items-center space-x-2'>
        <p className='font-semibold'>pkr {product.discountedPrice}</p>
        <p className='line-through opacity-50'>{product.price}</p>
        <p className='text-green-600 font-semibold'>{product.discountedPercent}% 0ff</p>
        </div>
      </div>
    </div>
  )
}
