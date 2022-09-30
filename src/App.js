function App() {
  return (
    <div className="h-screen flex  items-center justify-center bg-gray-100">
      <div className="max-w-sm p-8 bg-white rounded-lg shadow-md space-y-2 sm:flex sm:gap-x-5 sm:py-4 sm:space-y-0 sm:items-center">
        <img
          className="h-24 w-24 sm:h-32 sm:w-32 mx-auto sm:mx-0 sm:flex-shrink-0 rounded-full ring-4 ring-green-400"
          src="rasedul.jpg"
          alt="demo"
        />
        <div className="text-center sm:text-left  space-y-2">
          <div>
            <p className="text-lg  text-black font-semibold">
              Learn With Rased
            </p>
            <p className="text-gray-500">Youtube Channel</p>
          </div>
          <button className="px-3 py-1 border  border-purple-200 rounded-full text-purple-600 text-sm font-semibold hover:bg-purple-600 hover:text-white hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
            Visit Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
