import Header from "./components/Header";
import WatchList from "./components/WatchList";
import Watched from "./components/Watched";
import Add from "./components/Add";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <WatchList />
          </Route>
          <Route exact path="/watched">
            <Watched />
          </Route>
          <Route exact path="/add">
            <Add />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
