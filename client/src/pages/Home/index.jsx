function DashboardStructure(props) {
  return (
    <>
      <div className="bg-red-400 w-full h-screen md:flex">
        {props.sidebar && (
          <div className="bg-blue-200 md:w-1/5">{props.sidebar}</div>
        )}
        <div className="bg-blue-500 md:w-full md:m-4">{props.children}</div>
      </div>
    </>
  );
}

export default DashboardStructure;
