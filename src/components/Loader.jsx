function Loader() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">

      <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>

      <p className="mt-4 text-xl font-semibold">
        Loading Dashboard...
      </p>

    </div>
  );
}

export default Loader;