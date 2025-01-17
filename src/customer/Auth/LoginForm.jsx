import { Button, Grid, TextField } from '@mui/material'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux"
import { getUser, login } from '../../State/Auth/Action';

export default function LoginForm() {
  const jwt = localStorage.getItem("jwt");
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const {auth} = useSelector(store=>store);
  console.log(auth);

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    const userData = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      email: data.get("email"),
      password: data.get("password"),
    };

    dispatch(login(userData));

    console.log("userData", userData);
  };

  useEffect(() => {
      if (jwt) {
        dispatch(getUser(jwt))
      }
    }, [jwt, auth.jwt]);

  return (

    <div>
      <form onSubmit={handleSubmit} >
        <Grid container spacing={3}>

          <Grid item xs={12}>
            <TextField
              required
              id='email'
              name='email'
              label="email"
              fullWidth
              autoComplete='email'
            />

          </Grid>

          <Grid item xs={12}>
            <TextField
              required
              id='password'
              name='password'
              label="Password"
              fullWidth
              autoComplete='password'
            />

          </Grid>

          <Grid item xs={12}>
            <Button
              className='bg-[#9155FD] w-full'
              type='submit'
              variant='contained'
              size="large"
              sx={{ padding: "0.8rem 0", bgcolor: "#9155FD" }}
            >
              Login
            </Button>

          </Grid>
        </Grid>
      </form>

      <div className='flex justify-center items-center'>
        <div className='py-3 flex items-center space-x-1'>
          <p className='pb-1'>
            if you don't have an account ?
          </p>
          <Button size='small' onClick={() => navigate("/register")}>
            Register
          </Button>
        </div>
      </div>

    </div>

  )
}
