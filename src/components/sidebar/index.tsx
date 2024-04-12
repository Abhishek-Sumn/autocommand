'use client'
import { usePathname } from 'next/navigation'
import React from 'react'
import Link from 'next/link'

type Props = {}

const MenuOptions = (props: Props) => {
    const pathname = usePathname()

    return (
        <nav className=' dark-bg-black h-screen overflow-scroll
        justify-between flex items-center flex-col gap-20 py-6
        px-2 '>
            <div className='flex items-center justify-center flex-col gap-8'>
                <Link href='/'
                    className='flex font-bold flex-row'>
                    AutoC
                </Link>
            </div>
        </nav>
    )
}

export default MenuOptions