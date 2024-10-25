// src/components/RealTimeStatus.jsx
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes

const RealTimeStatus = ({ vehicles }) => {
  const [updatedVehicles, setUpdatedVehicles] = useState(vehicles);

  useEffect(() => {
    const interval = setInterval(() => {
      setUpdatedVehicles((prevVehicles) => 
        prevVehicles.map(vehicle => {
          if (vehicle.status === 'In Transit') {
            const distanceTravelled = 3; // Simulate distance travelled
            const batteryLoss = Math.floor(distanceTravelled / 3); // 1% battery loss for every 3 km
            return {
              ...vehicle,
              battery: Math.max(vehicle.battery - batteryLoss, 0), // Prevent battery from going below 0
              distance: vehicle.distance + distanceTravelled,
            };
          } else if (vehicle.status === 'Charging') {
            const chargingGain = 10; // 10% battery increase
            return {
              ...vehicle,
              battery: Math.min(vehicle.battery + chargingGain, 100), // Prevent battery from exceeding 100%
            };
          }
          return vehicle;
        })
      );
    }, 10000); // Update every 10 seconds

    return () => clearInterval(interval); // Clean up on unmount
  }, []);

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-xl font-bold text-gray-700 mb-2">Real-Time Status Updates</h2>
      <ul>
        {updatedVehicles.map(vehicle => (
          <li key={vehicle.id} className="mb-2">
            <span className={`font-bold ${vehicle.battery < 15 ? 'text-red-500' : 'text-gray-800'}`}>
              Vehicle ID: {vehicle.id} - Battery: {vehicle.battery}% - Status: {vehicle.status}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Define prop types
RealTimeStatus.propTypes = {
  vehicles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      battery: PropTypes.number.isRequired,
      distance: PropTypes.number.isRequired,
      status: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default RealTimeStatus;
