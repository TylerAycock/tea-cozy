import "./App.css";
import Header from "./components/Header";
import Mission from "./components/Mission";
import TeaOfMonth from "./components/TeaOfMonth";
import Locations from "./components/Locations";

function App() {
  return (
    <div className="wrapper">
      <Header/>
      <Mission/>
      <TeaOfMonth/>
      <Locations/>
      <footer>Footer</footer>
    </div>
  );
}

export default App;
