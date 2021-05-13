import Header from "./components/Header";
import WatchList from "./components/WatchList";
import Watched from "./components/Watched";
import Add from "./components/Add";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./styles.css";
import { GlobalProvider } from "./context/GlobalState";
import "./icons/css/all.min.css";
import NotFound from "./components/NotFound";
import Description from "./components/Description";
import Descriptionw from "./components/Descriptionw";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <WatchList />
          </Route>
          <Route path="/watched">
            <Watched />
          </Route>
          <Route path="/add">
            <Add />
          </Route>
          <Route path="/description/:id">
            <Description />
          </Route>
          <Route path="/descriptionw/:id">
            <Descriptionw />
          </Route>
          <Route path="/*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </GlobalProvider>
  );
}

export default App;
