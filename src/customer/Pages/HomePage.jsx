import React from 'react'
import Maincarosel from '../component/Homecarosel/Maincarosel';
import Homesectioncarousel from '../component/Homesectioncarousel/Homesectioncarousel';
import { gym_fit } from '../../Data/gum_fit.js';

export default function HomePage() {
  return (
    <div>
      <Maincarosel />
      <div className='space-y-10 py-20 flex flex-col justify-center'>
        <Homesectioncarousel data={gym_fit} sectionName={"Newest Arrival"}/>
        <Homesectioncarousel data={gym_fit} sectionName={"Men shoes"}/>
        <Homesectioncarousel data={gym_fit} sectionName={"Men's Shirt"}/>
        <Homesectioncarousel data={gym_fit} sectionName={"Women's Saree"}/>

      </div>

    </div>
  )
}
