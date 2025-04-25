import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../ui/button'

const Header = () => {
  return (
    <div className='bg-white'>
      <div className='container sticky top-0 z-20 flex items-center justify-between mx-auto h-[var(--header-height)]'>
      <div className='overflow-hidden'>
        <img src="https://mixivivu.com/_next/image?url=%2Fblack-logo.png&w=256&q=75" alt="Logo" className='w-[190px] h-[50px]'/>
      </div>
      <ul className='flex items-center gap-2.5'>
        <li>
          <Link to={"/"}>Khách sạn</Link>
        </li>
        <li>
          <Link to={"/"}>Nhà nghỉ</Link>
        </li>
        <li>
          <Link to={"/"}>Home stay</Link>
        </li>
      </ul>
      <div>
        <Button>Login</Button>
      </div>
    </div>
    </div>
  )
}

export default Header