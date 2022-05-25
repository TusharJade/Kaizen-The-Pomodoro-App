import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import {
  LandingPage,
  LoginPage,
  CreateTaskPage,
  PomodoroTimerPage,
  SignupPage,
} from "./pages/index";

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
      </Routes>
    </>
  );
}

export default App;
