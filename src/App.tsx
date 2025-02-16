import "./App.css";
import MainPage from "./pages/MainPage";
import LibraryPage from "./pages/LibraryPage";
import AddMoviePage from "./pages/AddMoviePage";
import NotFoundPage from "./pages/NotFoundPage";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/movie-library" element={<LibraryPage />} />
          <Route path="/add-movie" element={<AddMoviePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </>
  );
}
