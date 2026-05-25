import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { Navbar } from "./components/Navbar";
import { Sidebar } from "./components/Sidebar";

import { MyCourses } from "./pages/MyCourses";
import { NewCourses } from "./pages/NewCourses";

function App() {
  return (
    <BrowserRouter>
      <div className="flex h-screen bg-gray-100">
        <Sidebar />

        <div className="flex flex-col flex-1">
          <Navbar />

          <div className="flex-1 overflow-y-auto">
            <Routes>
              <Route path="/" element={<Navigate to="/courses" />} />

              <Route path="/courses" element={<MyCourses />} />
               <Route path="/courses/new" element={<NewCourses />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
