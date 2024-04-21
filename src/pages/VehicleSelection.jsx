import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const VehicleSelection = () => {
  const [vehicle, setVehicle] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    
    localStorage.setItem('selectedVehicle', vehicle);

    navigate('/confirmation');
  };

  return (
    <div className=' flex justify-center'>
    <form onSubmit={handleSubmit} className=' border-2 border-black px-5 py-4 mt-5 gap-5 flex '>
      <select required  value={vehicle} onChange={(e) => setVehicle(e.target.value)}>
        <option className=' ' value="">Select Vehicle</option>
        <option value="Car">Car</option>
        <option value="Truck">Truck</option>
        <option value="Motorcycle">Motorcycle</option>
        <option value="Cycle">Cycle</option>
      </select>
      <button className=' border-2 border-black px-4 bg-red-700 text-white hover:bg-green-700  ' type="submit">Next</button>
    </form>
    </div>
  );
};

export default VehicleSelection;



