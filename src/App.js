import "./App.css";
import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import {
  LandingPage,
  LoginPage,
  CreateTaskPage,
  PomodoroTimerPage,
  SignupPage,
  SinglePomdoroPage,
} from "./pages/index";
import Mockman from "mockman-js";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/tasks" element={<CreateTaskPage />} />
        <Route path="/tasks/:taskID" element={<SinglePomdoroPage />} />
        <Route path="/pomodoro-time" element={<PomodoroTimerPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/mockman" element={<Mockman />} />
      </Routes>
    </>
  );
}

export default App;
