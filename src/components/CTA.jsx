import React from 'react'
import styles from '../style'
import Button from './Button'

const CTA = () => (
  <div className={`${styles.paddingY} ${styles.flexCenter} w-full flex items-center justify-around  lg:flex-row xs:flex-col flex-col py-14 rounded-2xl bg-black-gradient`} >
    <div className='flex justify-between flex-col ss:text-center'>
      <h1 className={`${styles.heading2}`}>Let’s try our servicenow!</h1>
      <p className={`${styles.paragraph} text-left max-w-[450px]`}>Everything you need to accept card payments and grow yourbusiness anywhere on the planet.</p>
    </div>
      
    <div className='md:mt-10 mt-6'>
        <Button />
    </div>
  </div> 
)

export default CTA