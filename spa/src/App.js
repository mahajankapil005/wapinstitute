import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import "./App.css";

const App = ()=>{
  const design = (
    <div class="page">
      <div class="container">
        <BrowserRouter>
          <Switch>
            <Route path="/">
              <h1>Welcome to Homepage</h1>
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
  return design;
}

export default App;