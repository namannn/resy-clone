import "./App.scss";
import Discover from "./Components/Discover";
import NavigationBar from "./Components/NavigationBar";
import RestaurantsCollections from "./Components/RestaurantsCollections";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Discover />
      <RestaurantsCollections />
    </div>
  );
}

export default App;
