import FleetOverview from '../components/FleetOverview';
import VehicleList from '../components/VehicleList';
import BatteryAlert from '../components/BatteryAlert';
import ChargingSchedule from '../components/ChargingSchedule';
import VehicleManagement from '../components/VehicleManagement';
import RealTimeStatus from '../components/RealTimeStatus';

const initialVehicles = [
  { id: 'V1', battery: 50, distance: 100, status: 'In Transit' },
  { id: 'V2', battery: 90, distance: 200, status: 'Charging' },
  { id: 'V3', battery: 20, distance: 50, status: 'Idle' },
];

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-200 p-2">
      <h1 className="text-2xl font-semibold text-center text-gray-800 mb-4">Fleet Management Dashboard</h1>
      <div className="grid gap-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        {/* Fleet Overview */}
        <div className="bg-white rounded-lg shadow-md p-2 hover:shadow-lg transition duration-200">
          <h2 className="text-lg font-bold text-gray-700 mb-1">Fleet Overview</h2>
          <FleetOverview />
        </div>

        {/* Vehicle Management */}
        <div className="bg-white rounded-lg shadow-md p-2 hover:shadow-lg transition duration-200">
          <h2 className="text-lg font-bold text-gray-700 mb-1">Vehicle Management</h2>
          <VehicleManagement />
        </div>

        {/* Vehicle List */}
        <div className="bg-white rounded-lg shadow-md p-2 hover:shadow-lg transition duration-200">
          <h2 className="text-lg font-bold text-gray-700 mb-1">Vehicle List</h2>
          <VehicleList />
        </div>

        {/* Battery Alert */}
        <div className="bg-white rounded-lg shadow-md p-2 hover:shadow-lg transition duration-200">
          <h2 className="text-lg font-bold text-gray-700 mb-1">Battery Alerts</h2>
          <BatteryAlert />
        </div>

        {/* Charging Schedule */}
        <div className="bg-white rounded-lg shadow-md p-2 hover:shadow-lg transition duration-200">
          <h2 className="text-lg font-bold text-gray-700 mb-1">Charging Schedule</h2>
          <ChargingSchedule />
        </div>

        {/* Real-Time Status Updates */}
        <div className="bg-white rounded-lg shadow-md p-2 hover:shadow-lg transition duration-200">
          <RealTimeStatus vehicles={initialVehicles} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
