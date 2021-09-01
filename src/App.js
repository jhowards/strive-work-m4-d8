import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import RowComponent from "./Components/RowComponent";
import MyNavbar from './Components/MyNavbar'

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <RowComponent movie="Harry Potter" />
      <RowComponent movie="Lord Of The Rings" />
      <RowComponent movie="Mission Impossible" />
    </div>
  );
}

export default App;
