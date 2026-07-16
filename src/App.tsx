import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";

export default function App() {
  return (
    <div className="h-screen bg-[#09090B]">

      <Navbar />

      <div className="flex h-[calc(100vh-64px)]">

        <Sidebar />

        <Hero />

      </div>

    </div>
  );
}