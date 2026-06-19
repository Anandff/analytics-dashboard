function EmptyState() {
  return (
    <div className="text-center p-10">
      <h2 className="text-2xl font-bold">
        No Data Available
      </h2>

      <p className="text-gray-500 mt-2">
        Try changing filters.
      </p>
    </div>
  );
}

export default EmptyState;