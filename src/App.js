function App() {
  return (
    <div className="h-screen flex  items-center justify-center bg-gray-100">
      <div className="max-w-sm p-8 bg-white rounded-lg shadow-md space-y-2">
        <img
          className="h-24 w-24 mx-auto rounded-full ring-4 ring-green-400"
          src="rasedul.jpg"
          alt="demo"
        />
        <div className="text-center space-y-2">
          <div>
            <p className="text-lg text-black font-semibold">Learn With Rased</p>
            <p className="text-gray-500">Youtube Channel</p>
          </div>
          <button className="px-3 py-1 border border-purple-200 rounded-full text-purple-600 text-sm font-semibold">
            Visit Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
