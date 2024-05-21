import { Outlet } from "react-router-dom";
import Header from "./layout/Header";

function App() {
  return (
    <>
      <Header />
      <main className="max-w-[1200px] w-full mx-auto px-4 py-10">
        <Outlet />
      </main>
    </>
  );
}

export default App;
