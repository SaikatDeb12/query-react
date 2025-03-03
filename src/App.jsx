import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/home";
import { Menu } from "./pages/menu";
import { Contact } from "./pages/contact";
import { Navbar } from "./pages/navbar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import FetchingData from "./Temp";
import Temp from "./Temp";

function App() {
  const client = new QueryClient({
    defaultOptions: {
      queries: { refetchOnWindowFocus: true },
    },
  });

  return (
    <div className="App">
      <Temp />
      {/* <FetchingData/> */}
      {/* <QueryClientProvider client={client}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<h1>Page Not Found</h1>} />
          </Routes>
        </Router>
      </QueryClientProvider> */}
    </div>
  );
}

export default App;
