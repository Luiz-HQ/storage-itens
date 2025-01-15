import Sidebar from "./myComponents/Sidebar/Sidebar";
import DashboardStructure from "./pages/Home";

function App() {
  return (
    <>
      <DashboardStructure sidebar={<Sidebar />}>
        <p>Conteúdo principal</p>
      </DashboardStructure>
    </>
  );
}

export default App;
