import { useState } from 'react';
import useBatteryStatus from '../hooks/useBatteryStatus';

const VehicleList = () => {
  const vehicles = useBatteryStatus();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredVehicles = vehicles.filter(vehicle => vehicle.id.includes(searchTerm));

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="font-semibold">Vehicle List</h2>
      <input 
        type="text" 
        placeholder="Search by Vehicle ID" 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
        className="p-2 border border-gray-300 rounded mb-2"
      />
      <ul>
        {filteredVehicles.map(vehicle => (
          <li key={vehicle.id} className={vehicle.batteryPercentage < 15 ? 'text-red-500' : ''}>
            Vehicle ID: {vehicle.id} - Battery: {vehicle.batteryPercentage}% - Status: {vehicle.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VehicleList;


