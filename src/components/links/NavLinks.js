import React from 'react'

const NavLinks = ({title}) => {
  return (
    <div className='text-base text-gray-900 flex items-center justify-center cursor-pointer md: px-4 md:pt-3 md:pb-4 pb-1 hover:text-black smooth'>
        {title}
    </div>
  )
}

export default NavLinks