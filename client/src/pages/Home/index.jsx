import Sidebar from "../../myComponents/Sidebar/Sidebar";

function Home() {
  return (
    <>
      <div className="bg-red-400 w-full h-screen flex">
        <div className="bg-blue-200 w-1/6">
          <Sidebar />
        </div>
        <div className="bg-blue-500 w-full m-4">informações produtos</div>
      </div>
    </>
  );
}

export default Home;
