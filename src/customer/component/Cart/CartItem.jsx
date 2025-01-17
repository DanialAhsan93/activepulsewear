import React from 'react';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Button, IconButton } from '@mui/material';

export default function CartItem() {
  return (
    <div className='p-5 shadow-lg border rounded-md'>
      <div className="flex items-center">
        <div className='w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]'>
          <img className='w-full h-full' src="https://i0.wp.com/activepulsewear.com/wp-content/uploads/2024/08/1000000040.png?fit=1081%2C1080&ssl=1" alt="" />
        </div>

        <div className="ml-5 space-y-1">
          <p className='font-semibold'>Navy blue stretchable trouser</p>
          <p className='opacity-70'>Size: L, White</p>
          <p className='opactiy-70 mt-2'>Seller: Crishtaliyo 2fashion</p>

          <div className='flex space-x-5 items-center text-gray-900 pt-6'>
            <p className='font-semibold'>Pkr199</p>
            <p className='opacity-60 line-through'>Pkr211</p>
            <p className='text-green-600 font-semibold'>5% Off</p>
          </div>

        </div>

      
      </div>

      <div className='lg:flex items-center lg:space-x-10 pt-4'>
          <div className='flex items-center space-x-2'>
            <IconButton>
              <RemoveCircleOutlineIcon />
            </IconButton>

            <span className='py-1 px-7 border rounded-sm'>3</span>
            <IconButton>
              <AddCircleOutlineIcon />
            </IconButton>
            

            <div>
              <Button>
                Remove
              </Button>
            </div>
          </div>

        </div>
    </div>
  )
}
