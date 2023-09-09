import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layoute from "./components/layout";
import HomePage from "./pages/HomePage";
import BusinessPage from "./pages/BusinessPage";
import EntertainmentPage from "./pages/EntertainmentPage";
import GeneralPage from "./pages/GeneralPage";
import HealthPage from "./pages/HealthPage";
import SciencePage from "./pages/SciencePage";
import SportsPage from "./pages/SportsPage";
import TechnologyPage from "./pages/TechnologyPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layoute />}>
          <Route path="" element={<HomePage />} />
          <Route path="business" element={<BusinessPage />} />
          <Route path="entertainment" element={<EntertainmentPage />} />
          <Route path="general" element={<GeneralPage />} />
          <Route path="health" element={<HealthPage />} />
          <Route path="science" element={<SciencePage />} />
          <Route path="sports" element={<SportsPage />} />
          <Route path="technology" element={<TechnologyPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
