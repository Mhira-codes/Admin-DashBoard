import React from 'react'
import NavLinks from './links/NavLinks'
import { AiOutlineSearch } from 'react-icons/ai';
import { IoMdNotificationsOutline} from 'react-icons/io';
import {IoIosArrowUp} from 'react-icons/io';

import { useState } from 'react';
const Header = () => {
const [active, setActive] = useState('')
let logo ="https://images.unsplash.com/photo-1639603683079-7398c604497a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJhbmtpbmclMjBsb2dvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
let navLinks = ["Overview","Payment", "Cards","Account", "Admin"]
let userImage ="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"

  return (
    <div className='flex w-full items-center justify-between space-x-4 pb-3 pt-4 px-3'>
<div className='border-b border-gray-900 w-[25%] flex items-center justify-center pb-2 md:justify-start  md:start-x-2  md:pb-6'>
<img className='w-10 h-10 md:w-12 md:h-12 rounded-full' src={logo} alt='logo'/>
<h1 className='self-center hidden   md:inline md:font-bold md:text-xl'>OpenBank</h1>
</div>
<div className='border-b border-gray-900 w-[140%] flex items-center justify-center pb-5 space-x-2'>
{navLinks.map((link)=>(
    <div className='flex justify-center items-center relative' onClick={()=> setActive(link)}>
        <NavLinks title={link} key={link}/>
        <div className={`${link === active ? "items-center justify-center flex absolute -bottom-3" :"hidden"}`}>
            <IoIosArrowUp/>
        </div>
  
    </div>
    
))}

</div>
<div className='border-b border-gray-900 w-[60%] pb-6 pt-4 hidden md:flex items-center  space-x-6 justify-center px-3'>
<div><AiOutlineSearch  className='text-xl'/></div>
<div><IoMdNotificationsOutline className='text-xl'/></div>
<img src={userImage} alt='userimage' className='w-8 h-8 rounded-full object-center object-cover'/>
</div>


    </div>
  )
}

export default Header