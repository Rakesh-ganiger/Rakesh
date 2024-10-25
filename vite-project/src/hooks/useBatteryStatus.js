import { useState, useEffect } from 'react';
import vehicleData from '../data/vehicles.json';

const useBatteryStatus = () => {
  const [vehicles, setVehicles] = useState(vehicleData);

  useEffect(() => {
    const interval = setInterval(() => {
      setVehicles((prevVehicles) => {
        return prevVehicles.map((vehicle) => {
          if (vehicle.status === 'In Transit') {
            const newBattery = Math.max(vehicle.batteryPercentage - Math.floor(1 / 3), 0);
            return { ...vehicle, batteryPercentage: newBattery };
          } else if (vehicle.status === 'Charging') {
            const newBattery = Math.min(vehicle.batteryPercentage + 10, 100);
            return { ...vehicle, batteryPercentage: newBattery };
          }
          return vehicle;
        });
      });
    }, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  return vehicles;
};

export default useBatteryStatus;


