import { CssBaseline } from "@material-ui/core";
import Home from "./components";
import styles from "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Portfolio from "./components/Portfolio";


function App() {
  return (
    <BrowserRouter>
    <Switch>
    <CssBaseline >
      <Route path="/"><Home /></Route>
  
    </CssBaseline>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
