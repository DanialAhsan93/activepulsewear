import { Box, Button, Grid, TextField } from '@mui/material'
import React from 'react'
import AddressCard from '../AdressCard/AddressCard'

export default function DeliveryAddressform() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data =new FormData(e.currentTarget);

    const address ={
      firstname:data.get("firstname"),
      lastname : data.get("lastname"),
      streetAddress : data.get("address"),
      city : data.get("city"),
      state : data.get("state"),
      zipCode : data.get("zip"),
      mobile : data.get("phoneNumber"),
    }
    console.log(address)
  }
  return (
    <Grid container spacing={4}>
      <Grid xs={12} lg={5} className='border rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll'>
        <div className='p-5 py-7 border-b cursor-pointer'>
          <AddressCard />
          <Button
            sx={{ mt: 2, bgcolor: "RGB(145 85 253)" }}
            size='large'
            variant='contained'
          >
            Deliver here
          </Button>
        </div>

      </Grid>

      <Grid item xs={12} lg={7}>
        <Box className="border rounded-s-md shadow-md p-5">
          <form onSubmit={handleSubmit}>

            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id='firstname'
                  name='firstname'
                  label="Firstname"
                  fullWidth
                  autoComplete='given-name'
                />

              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id='lastname'
                  name='lastname'
                  label="Lastname"
                  fullWidth
                  autoComplete='given-name'
                />

              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id='address'
                  name='address'
                  label="Address"
                  fullWidth
                  autoComplete='given-name'
                  multiline
                  rows={4}
                />

              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id='city'
                  name='city'
                  label="city"
                  fullWidth
                  autoComplete='given-name'
                />

              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id='state'
                  name='state'
                  label="state/province/region"
                  fullWidth
                  autoComplete='given-name'
                />

              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id='zip'
                  name='zip'
                  label="zip/postal code"
                  fullWidth
                  autoComplete='shipping postal-code'
                />

              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id='phoneNumber'
                  name='phoneNumber'
                  label="Phonenumber"
                  fullWidth
                  autoComplete='given-name'
                />

              </Grid>
              <Grid item xs={12} sm={6}>
                <Button
                  sx={{py:2, mt: 2, bgcolor: "RGB(145 85 253)" }}
                  size='large'
                  variant='contained'
                  type='submit'
                >
                  Deliver here
                </Button>
              </Grid>


            </Grid>
          </form>

        </Box>
      </Grid>

    </Grid>
  )
}
