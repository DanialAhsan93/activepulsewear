import React from 'react';
import { Button, Grid, Link, Typography } from '@mui/material';

export default function Footer() {
  return (
    <div>
      <Grid className='bg-black text-white text-center mt-10'
        container
        sx={{ bgcolor: "black", color: "white", py: 3 }}
      >
        <Grid item xs={12} sm={6} md={3}>
          <Typography className='pb-5' variant='h6'>
            Company
          </Typography>
          <div>
            <Button className='pb-5' variant='h6'>
              About
            </Button>
          </div>
          <div>
            <Button className='pb-5' variant='h6'>
              Blog
            </Button>
          </div>

          <div>
            <Button className='pb-5' variant='h6'>
              Press
            </Button>
          </div>
          <div>
            <Button className='pb-5' variant='h6'>
              Jobs
            </Button>
          </div>
          <div>
            <Button className='pb-5' variant='h6'>
              Partners
            </Button>
          </div>

        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className='pb-5' variant='h6'>
            {""}
            Solutions{""}
          </Typography>
          <div>
            <Button className='pb-5' variant='h6'>
              Marketing
            </Button>
          </div>
          <div>
            <Button className='pb-5' variant='h6'>
              Analytics
            </Button>
          </div>

          <div>
            <Button className='pb-5' variant='h6'>
              Commerce
            </Button>
          </div>
          <div>
            <Button className='pb-5' variant='h6'>
              Insights
            </Button>
          </div>
          <div>
            <Button className='pb-5' variant='h6'>
              Support
            </Button>
          </div>

        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className='pb-5' variant='h6'>
            Documentation
          </Typography>
          <div>
            <Button className='pb-5' variant='h6'>
              Guides
            </Button>
          </div>
          <div>
            <Button className='pb-5' variant='h6'>
              Api Status
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className='pb-5' variant='h6'>
            Legal
          </Typography>
          <div>
            <Button className='pb-5' variant='h6'>
              Claims
            </Button>
          </div>
          <div>
            <Button className='pb-5' variant='h6'>
              Privacy
            </Button>
          </div>

          <div>
            <Button className='pb-5' variant='h6'>
              Terms
            </Button>
          </div>

        </Grid>

        <Grid className='pt-20' item xs={12}>
          <Typography component="p" variant='body2' alignItems="center">
            &copy; 2024 My company. All rights reserved
          </Typography>
          <Typography component="p" variant='body2' alignItems="center">
            made with love by me
          </Typography>
          <Typography component="p" variant='body2' alignItems="center">
            Icons made by{" "}
            <Link href="https://www.freepik.com" color='inherit' underline='always' >
              Freepik{" "}
            </Link>
            from{" "}
            <Link href="https://www.flaticon.com" color='inherit' underline='always' >
              www.flaticons.com
            </Link>

          </Typography>
          
        </Grid>



      </Grid>
    </div>
  )
}
