import "./App.css";
import { Routes, Route } from "react-router-dom";
import {
  LandingPage,
  LoginPage,
  CreateTaskPage,
  PomodoroTimerPage,
  SignupPage,
} from "./pages/index";
import { Navbar } from "./components/Navbar/Navbar";
import Mockman from "mockman-js";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/tasks" element={<CreateTaskPage />} />
        <Route path="/pomodoro-time" element={<PomodoroTimerPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/mockman" element={<Mockman />} />
      </Routes>
    </>
  );
}

export default App;
