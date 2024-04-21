
import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const CustomerForm = () => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');

  const nameRef = useRef(); 
  const mobileRef = useRef();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    
    const customerName = nameRef.current.value;
    const customerMobile = mobileRef.current.value;
   
    localStorage.setItem('name', customerName);
    localStorage.setItem('mobile', customerMobile);

    
    navigate('/vehicleselection');
  };

  return (
    <div>
      <div className=' sm:flex sm:justify-center px-5 py-0   '>
        <form className=' flex flex-col  border-2 border-black px-10 py-5 mt-10 gap-5 rounded-2xl  bg-gray-300' onSubmit={handleSubmit}>
          <div >
            <div className=' sm:flex flex flex-col '>
              <label className=' text-xl font-semibold ' htmlFor="">Customer Name :</label>
              <input className=' border-2 border-black text-opacity-10 ml-1'
                required
                ref={nameRef}
                type="text"
                placeholder="Customer Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className=' mt-5 sm:flex flex flex-col '>
              <label className=' text-xl font-semibold' htmlFor="">Mobile Number  :</label>
              <input className=' border-2 border-black text-opacity-10 ml-2'
                required
                ref={mobileRef}
                type="text"
                placeholder="Mobile Number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
            </div>
            <div className=' flex justify-end mt-5 '>
            <button className=' border-2 border-black px-4 bg-red-700 text-white  ' type="submit">Next</button>
            </div>

          </div>
        </form>
      </div>
    </div>
  );
};

export default CustomerForm;



