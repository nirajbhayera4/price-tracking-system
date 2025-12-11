const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-slate-900 text-white flex flex-col p-6">
      <h1 className="text-2xl font-bold mb-8">Pricing Engine</h1>

      <ul className="space-y-4">
        <li className="hover:text-indigo-400 cursor-pointer">Dashboard</li>
        <li className="hover:text-indigo-400 cursor-pointer">Pricing Model</li>
        <li className="hover:text-indigo-400 cursor-pointer">Competitor Tracking</li>
        <li className="hover:text-indigo-400 cursor-pointer">Forecast Reports</li>
        <li className="hover:text-indigo-400 cursor-pointer">Settings</li>
      </ul>
    </div>
  );
};

export default Sidebar;
