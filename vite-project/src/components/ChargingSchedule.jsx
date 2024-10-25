

import  { useState } from 'react';

const ChargingSchedule = () => {
  const [schedule, setSchedule] = useState('');

  const handleScheduleChange = (e) => {
    setSchedule(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Scheduled charging for: ${schedule}`);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="font-semibold">Charging Schedule</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Set Charging Time:
          <input 
            type="time" 
            value={schedule} 
            onChange={handleScheduleChange} 
            className="ml-2 p-1 border border-gray-300 rounded"
          />
        </label>
        <button type="submit" className="ml-2 bg-blue-500 text-white p-1 rounded">Schedule</button>
      </form>
    </div>
  );
};

export default ChargingSchedule;
