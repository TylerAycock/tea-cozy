import "./App.css";
import Header from "./components/Header";
import Mission from "./components/Mission";
import TeaOfMonth from "./components/TeaOfMonth";

function App() {
  return (
    <div className="wrapper">
      <Header/>
      <Mission/>
      <TeaOfMonth/>
      <div id="locations">Locations</div>
      <footer>Footer</footer>
    </div>
  );
}

export default App;
