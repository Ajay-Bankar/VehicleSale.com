import React from 'react';
import { useNavigate } from 'react-router-dom';


const ConfirmationPage = () => {
   
    const customerName = localStorage.getItem('name');
    const customerMobile = localStorage.getItem('mobile');
   
    const selectedVehicle = localStorage.getItem('selectedVehicle');

    const navigate = useNavigate();

    const handleNavigate = () => {

        alert('Order has confirmed')
        navigate('/customerform')

    }

    const navigateTovehicleSelection = ()=>{
        navigate('/VehicleSelection')

    }

    return (
        <div className='flex justify-center  mt-5 px-0  '>
            <div className='border-2 border-black px-2 py-5 bg-gray-300 rounded-2xl'>
                <h2 className='text-center text-2xl font-bold text-red-700'>Confirmation</h2>
                <div className='mt-5 flex flex-col gap-2'>
                    <p className='text-xl font-semibold'>Customer Name:</p>
                    <h2 className=' text-center'> {customerName}</h2>
                    <p className='text-xl font-semibold'>Mobile Number: </p>
                    <h2 className=' text-center'>{customerMobile}</h2>
                    <p className='text-xl font-semibold'>Selected Vehicle: </p>
                    <h2 className=' text-center'>{selectedVehicle}</h2>
                </div>
                <div className='flex justify-evenly mt-2 gap-10'>
                <button onClick={navigateTovehicleSelection} className=' border-2 border-black px-3 bg-green-600 text-white hover:bg-green-800'>Back</button>
                    <button onClick={handleNavigate} className=' border-2 border-black px-3 bg-green-600 text-white hover:bg-green-800'>Confirm</button>
                    
                </div>
            </div>

        </div>
    );
};

export default ConfirmationPage;
