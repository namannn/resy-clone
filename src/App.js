import "./App.scss";
import Discover from "./Components/Discover";
import NavigationBar from "./Components/NavigationBar";
import RestaurantsCollections from "./Components/RestaurantsCollections";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Restaurant from "./Components/Restaurant";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Discover />
                <RestaurantsCollections />
              </>
            }
          />
          <Route path="restaurant/:id" element={<Restaurant />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
