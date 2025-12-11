import MainLayout from "../layout/MainLayout";

const Dashboard = () => {
  return (
    <MainLayout>
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow">
          <p className="text-gray-500">Current Price</p>
          <h2 className="text-3xl font-bold mt-2">₹299</h2>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <p className="text-gray-500">Demand Level</p>
          <h2 className="text-3xl font-bold mt-2 text-green-600">High</h2>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <p className="text-gray-500">Forecast Trend</p>
          <h2 className="text-3xl font-bold mt-2 text-blue-600">↑ 12%</h2>
        </div>
      </div>
    </MainLayout>
  );
};

export default Dashboard;
