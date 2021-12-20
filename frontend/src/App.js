import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Footer,
  Home,
  Playlist,
  Videos,
  VideoDetail,
} from "./components";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/playlist" element={<Playlist />} />
          <Route path="/videos" element={<Videos />} />
          <Route
            exact
            path="/:id"
            render={({ match }) => <VideoDetail id={match.params.id} />}
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
