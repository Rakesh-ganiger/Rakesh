// src/components/VehicleManagement.jsx
import  { useState } from 'react';

const VehicleManagement = () => {
  const [vehicles, setVehicles] = useState([]);
  const [vehicleID, setVehicleID] = useState('');
  const [batteryPercentage, setBatteryPercentage] = useState(0);
  const [distanceTravelled, setDistanceTravelled] = useState(0);
  const [lastChargeTime, setLastChargeTime] = useState('');
  const [status, setStatus] = useState('Idle');
  const [error, setError] = useState('');

  const handleAddVehicle = () => {
    // Check if vehicle ID already exists
    if (vehicles.some((vehicle) => vehicle.id === vehicleID)) {
      setError('Vehicle ID already exists. Please use a different ID.');
      return;
    }

    // Prevent adding if vehicleID is empty
    if (!vehicleID) return;

    const newVehicle = {
      id: vehicleID,
      batteryPercentage,
      distanceTravelled,
      lastChargeTime,
      status,
    };
    setVehicles([...vehicles, newVehicle]);
    resetForm();
    setError(''); // Clear error message on successful addition
  };

  const handleEditVehicle = (id) => {
    const vehicleToEdit = vehicles.find((v) => v.id === id);
    setVehicleID(vehicleToEdit.id);
    setBatteryPercentage(vehicleToEdit.batteryPercentage);
    setDistanceTravelled(vehicleToEdit.distanceTravelled);
    setLastChargeTime(vehicleToEdit.lastChargeTime);
    setStatus(vehicleToEdit.status);
  };

  const handleDeleteVehicle = (id) => {
    setVehicles(vehicles.filter((v) => v.id !== id));
  };

  const resetForm = () => {
    setVehicleID('');
    setBatteryPercentage(0);
    setDistanceTravelled(0);
    setLastChargeTime('');
    setStatus('Idle');
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 mb-6">
      <h2 className="text-xl font-bold text-gray-700 mb-4">Vehicle Management</h2>
      {error && <p className="text-red-500">{error}</p>} {/* Display error message */}
      <form className="mb-4">
        <input
          type="text"
          value={vehicleID}
          onChange={(e) => setVehicleID(e.target.value)}
          placeholder="Enter Vehicle ID (e.g. V123)"
          className="border border-gray-300 rounded p-2 mb-2 w-full"
          required
        />
        <input
          type="number"
          value={batteryPercentage}
          onChange={(e) => setBatteryPercentage(e.target.value)}
          placeholder="Enter Battery Percentage (0-100)"
          className="border border-gray-300 rounded p-2 mb-2 w-full"
          min="0"
          max="100"
          required
        />
        <input
          type="number"
          value={distanceTravelled}
          onChange={(e) => setDistanceTravelled(e.target.value)}
          placeholder="Enter Distance Travelled (in km)"
          className="border border-gray-300 rounded p-2 mb-2 w-full"
          required
        />
        <input
          type="datetime-local"
          value={lastChargeTime}
          onChange={(e) => setLastChargeTime(e.target.value)}
          className="border border-gray-300 rounded p-2 mb-2 w-full"
          required
        />
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="border border-gray-300 rounded p-2 mb-4 w-full"
        >
          <option value="Idle">Idle</option>
          <option value="In Transit">In Transit</option>
          <option value="Charging">Charging</option>
        </select>
        <button
          type="button"
          onClick={handleAddVehicle}
          className="bg-blue-500 text-white rounded p-2 w-full"
        >
          Add Vehicle
        </button>
      </form>

      <h3 className="text-lg font-bold text-gray-700 mb-2">Vehicle List</h3>
      <ul>
        {vehicles.map((vehicle) => (
          <li key={vehicle.id} className="flex justify-between items-center mb-2">
            <div>
              <strong>ID:</strong> {vehicle.id}, 
              <strong> Battery:</strong> {vehicle.batteryPercentage}%, 
              <strong> Distance:</strong> {vehicle.distanceTravelled} km, 
              <strong> Last Charge:</strong> {vehicle.lastChargeTime}, 
              <strong> Status:</strong> {vehicle.status}
            </div>
            <div>
              <button
                onClick={() => handleEditVehicle(vehicle.id)}
                className="bg-yellow-500 text-white rounded px-2 py-1 mr-2"
              >
                Edit
              </button>
              <button
                onClick={() => handleDeleteVehicle(vehicle.id)}
                className="bg-red-500 text-white rounded px-2 py-1"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VehicleManagement;


