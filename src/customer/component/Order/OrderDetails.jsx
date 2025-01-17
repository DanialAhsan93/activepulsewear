import React from 'react'
import AddressCard from '../AdressCard/AddressCard'
import OrderTracker from './OrderTracker'
import { Box, Grid } from '@mui/material'
import { deepPurple } from '@mui/material/colors';
import StarBorderIcon from "@mui/icons-material/StarBorder";

export default function OrderDetails() {
  return (
    <div className='px-5 lg;px-20'>
      <div>
        <h1 className='font-bold text-lg py-10'>Delivery Address</h1>
        <AddressCard />
      </div>

      <div className='py-20'>
        <OrderTracker activeStep={3} />
      </div>

      <Grid className='space-y-5' container>
        {[1, 1, 1, 1].map((item) => (
          <>
            <Grid item container className='shadow-xl rounded-md p-5 border' sx={{ alignItems: "center", justifyContent: "space-between" }}>
              <Grid item sx={6}>
                <div className='flex items-center space-x-4'>
                  <img className='w-[5rem] h-[5rem] object-cover ' src="https://i0.wp.com/activepulsewear.com/wp-content/uploads/2024/08/1000000040.png?fit=1081%2C1080&ssl=1" alt="" />

                  <div className='space-y-2 ml-5'>
                    <p className='font-semibold'>Men Navy Blue Trouser</p>
                    <p className='space-x-5 opacity-50 text-xs font-semibold'><span>Color : Navy-Blue</span> <span>Size : M</span></p>
                    <p>Active Pulse Wear</p>
                    <p>Pkr1800</p>
                  </div>

                </div>

              </Grid>

              <Grid item>
                <Box sx={{ color: deepPurple[500] }}>
                  <StarBorderIcon sx={{ fontSize: "2rem" }} className='px-2 text-2xl' />
                  <span>Rate & Review Products</span>
                </Box>

              </Grid>


            </Grid>
          </>
        ))}

      </Grid>
    </div>
  )
}
