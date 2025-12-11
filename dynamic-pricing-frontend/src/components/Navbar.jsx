const Navbar = () => {
  return (
    <div className="w-full h-16 bg-white shadow flex justify-between items-center px-6">
      <input
        type="text"
        placeholder="Search..."
        className="border p-2 rounded-lg w-64"
      />

      <div className="flex items-center gap-4">
        <span className="text-gray-700 font-medium">Admin</span>
        <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
      </div>
    </div>
  );
};

export default Navbar;
