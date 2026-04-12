import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { AddMeme } from "./pages/AddMeme";
import { MemeDetail } from "./pages/MemeDetail";
import { Profile } from "./pages/Profile";
import MainLayout from "./shared/ui/layout/main-layout";
import { ROUTES } from "./shared/constants/routes";

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.MEMES} element={<Home />} />
          <Route path={ROUTES.MEME_DETAIL_PATTERN} element={<MemeDetail />} />
          <Route path={ROUTES.ADD_MEME} element={<AddMeme />} />
          <Route path={ROUTES.PROFILE} element={<Profile />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
