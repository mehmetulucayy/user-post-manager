import { Outlet } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Container from "@/components/layout/Container";
import '@/styles/globals.css';

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <Outlet />
      </Container>
    </>
  );
}

export default App;