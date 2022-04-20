// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";
import React, { useState } from "react";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import AddCarPage from "./pages/TestPage/TestPage";
import VideoPage from "./pages/VideoPage/VideoPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Search from "./components/Search/Search";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  const [searchTerm, setSearchTerm] = useState("rock_n_roll");
  const [startSearch, setStartSearch] = useState(true);
  const [clickedVideo, setClickedVideo] = useState([]);

  const [apiKey, setApiKey] = useState(
    "AIzaSyBMLRFVwV-f5nuycG3oUacvaALE4OLlU9w"
  );

  return (
    <div>
      <Navbar />
      <Search
        searchTerm={searchTerm}
        setStartSearch={setStartSearch}
        setSearchTerm={setSearchTerm}
      />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              searchTerm={searchTerm}
              startSearch={startSearch}
              setStartSearch={setStartSearch}
              setClickedVideo={setClickedVideo}
              apiKey={apiKey}
            />
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/addcar"
          element={
            <PrivateRoute>
              <AddCarPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/videopage/:video/"
          element={
            <VideoPage
              videoObj={clickedVideo}
              setStartSearch={setStartSearch}
              setClickedVideo={setClickedVideo}
              apiKey={apiKey}
            />
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
