import "./App.css";
import MainPage from "./pages/MainPage";
import LibraryPage from "./pages/LibraryPage";
import AddMoviePage from "./pages/AddMoviePage";
import NotFoundPage from "./pages/NotFoundPage";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import DetailedInfoMovie from "./pages/DetailedInfoMovie";

export default function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/my-movie-library-app/" element={<MainPage />} />
            <Route
              path="/my-movie-library-app/movie-library"
              element={<LibraryPage />}
            />
            <Route
              path="/my-movie-library-app/add-movie"
              element={<AddMoviePage />}
            />
            <Route
              path="/my-movie-library-app/movie/:id"
              element={<DetailedInfoMovie />}
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Router>
      </Provider>
    </>
  );
}
