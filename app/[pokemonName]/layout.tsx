import Link from 'next/link'
import React from 'react'
import { IoArrowBackCircleOutline } from "react-icons/io5";


const layout = ({children}: {children: any}) => {
  return (
    <>
      <Link href={"/"} className='flex items-center gap-2 m-3'>
        Go back to searching! <IoArrowBackCircleOutline />
      </Link>
      {children}
    </>
  )
}

export default layout