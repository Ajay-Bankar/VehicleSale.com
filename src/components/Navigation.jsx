import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <div className=' sm:flex flex flex-col  w-full justify-evenly bg-gray-800 sm:py-5 py-1'>
            <div>
                <h1 className=' text-red-700 sm:text-3xl sm:font-bold text-xl text-center '>Vehiclesales.com</h1>
            </div>
            <div className=' flex justify-center gap-5 text-white mt-3'>
                <Link className=' sm:text-xl font-bold border-2 border-white  hover:bg-green-800' to='/'>Home</Link>
                {/* <Link to='/confirmation'>Confirmation</Link>
                <Link to='/vehicleselection'>Vehicle</Link> */}
                <Link className=' sm:text-xl font-bold border-2 border-white px-2 hover:bg-green-800' to='/customerform '>Customer Login</Link>
            </div>
        </div>
    )
}

export default Navigation