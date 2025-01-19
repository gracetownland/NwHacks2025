import "./App.css";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { CommunityEvents } from "./CommunityEvents";
import EventDetail from "./pages/Event/EventDetail";
import Home from "./pages/Home";
import { Navbar } from "./Navbar";
import { Reward } from "./pages/Reward/Rewards";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<CommunityEvents />} />
        <Route path="/events/:eventId" element={<EventDetail/>} />
        <Route path="/rewards" element={<Reward />} />
      </Routes>
    </Router>
  );
}

export default App;