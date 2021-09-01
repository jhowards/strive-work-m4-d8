import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import RowComponent from "./Components/RowComponent";
import ShowDetail from "./Components/ShowDetail";
import MyNavbar from './Components/MyNavbar'
import { BrowserRouter as Router, Route } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Router>
      <MyNavbar />
       <Route path="/" exact render={() => <RowComponent movie="Harry Potter" />} />
       <Route path="/" exact render={() => <RowComponent movie="Lord Of The Rings" />} />
       <Route path="/" exact render={() => <RowComponent movie="Mission Impossible" />} />
       <Route path="/detail/:id" exact component={ShowDetail} />
     </Router>
    </div>
  );
}

export default App;

       {/* <Route path="/" exact component={Home} /> */}