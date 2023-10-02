import "./App.css";
import Header from "./components/Header";
import Mission from "./components/Mission";
import TeaOfMonth from "./components/TeaOfMonth";
import Locations from "./components/Locations";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Mission />
      <TeaOfMonth />
      <Locations />
      <Footer />
      <p className="copyright">copyright The Tea Cozy 2017</p>
    </div>
  );
}

export default App;
