import "./App.css";
import Header from "./components/Header";
import Mission from "./components/Mission";

function App() {
  return (
    <div className="wrapper">
      <Header/>
      <Mission/>
      <div id="tom">Tea of the Month</div>
      <div id="locations">Locations</div>
      <footer>Footer</footer>
    </div>
  );
}

export default App;
