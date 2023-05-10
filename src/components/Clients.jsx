import React from 'react'
import { airbnb, binance, coinbase, dropbox } from '../assets'
import styles from '../style'

const Clients = () => (
  <section className={`${styles.paddingY} ${styles.flexCenter} flex flex-col ss:flex-row items-center flex-wrap justify-between `}>
    <img src={airbnb} alt='air bnb logo' className='w-[20%] h-[20%] transition duration-300 ease-in-out filter hover:brightness-600 ss:mt-0 mt-6'/>
    <img src={binance} alt='binance logo' className='w-[20%] h-[20%] transition duration-300 ease-in-out filter hover:brightness-600 ss:mt-0 mt-6'/>
    <img src={coinbase} alt='coinbase logo' className='w-[20%] h-[20%] transition duration-300 ease-in-out filter hover:brightness-600 ss:mt-0 mt-6'/>
    <img src={dropbox} alt='dropbox logo' className='w-[20%] h-[20%] transition duration-300 ease-in-out filter hover:brightness-600 ss:mt-0 mt-6'/>

  </section>
)

export default Clients