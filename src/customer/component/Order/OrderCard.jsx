import { Grid, Grid2 } from '@mui/material'
import React from 'react';
import AdjustIcon from '@mui/icons-material/Adjust';

export default function OrderCard() {
  return (
    <div className='p-5 shadow-lg hover:shadow-2xl border'>
      <Grid container spacing={2} sx={{ justifyContent: "center" }}>
        <Grid item xs={6}>
          <div className='flex cursor-pointer'>
            <img className='w-[5rem] h-[5rem] object-cover' src="https://i0.wp.com/activepulsewear.com/wp-content/uploads/2024/08/1000000040.png?fit=1081%2C1080&ssl=1" alt="" />
            <div className='ml-5 space-y-2'>
              <p>Men Navy Blue Trouser</p>
              <p className='opacity-50 text-sm font-semibold'>Size : M</p>
              <p className='opacity-50 text-sm font-semibold'>Color : Navy-Blue</p>

            </div>
          </div>

        </Grid>

        <Grid item xs={2}>
          <p>Pkr1099</p>
        </Grid>

        <Grid item xs={4}>
          {true &&
            <div>
              <p>
                <AdjustIcon sx={{ width: "15px", height: "15px" }} className='text-green-600 mr-2 text-sm' />
                <span>
                  Delivered On March 03
                </span>
              </p>
              <p>
                Your item has been Delivered
              </p>
            </div>
          }

          {false && <p>
            <span>
              Expected  delivery On March 03
            </span>
          </p>}
        </Grid>
      </Grid>
    </div>
  )
}
