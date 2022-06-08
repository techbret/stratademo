import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (

        <div>
            <h1 className='block text-4xl'>Test</h1>

        <nav className="bg-blue-800">

        <ul className='md:flex gap-9 p-6 uppercase bg-white-50'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about-us'>About Us</Link></li>
            <li><Link to='/how-it-works'>How It Works</Link></li>
            <li><Link to='contact-us'>Contact</Link></li>
        </ul> 

        </nav>

        </div>
    )
}