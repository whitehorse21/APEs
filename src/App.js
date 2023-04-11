import "./App.css";
import NavBar from "./components/navBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import store from "./redux/store";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import ScrollToTopBtn from "./components/ScrollToTop";

import { AlphaHome, AlphaCollection, FusionCollection, 
  FusionHome, CollectionPage, ComingSoon, Construction, LoadingPage } from "./pages";
import { Suspense } from "react";

function App() {
  return (
    <Provider store={store}>
      <Suspense fallback={<LoadingPage />}>
      <Router>
        <NavBar />
        <div className="pages">
          <Switch>
            <Route exact path="/" component={AlphaHome} />
            <Route exact path="/alpha-collections" component={AlphaCollection} />
            <Route exact path="/fusion-collections" component={FusionCollection} />
            <Route exact path="/collections" component={CollectionPage} />
            <Route exact path="/fusion" component={FusionHome} />
            <Route path="/ape-world" render={() => <Construction title="Ape World" />} />
            <Route path="/mint" render={() => <Construction title="Mint Page" />} />
            <Route exact path="/coming-soon" component={ComingSoon} />
            <Route path="/coming-fusion" render={() => <ComingSoon withImage={true} />} />
          </Switch>
          <ScrollToTopBtn />
        </div>
      </Router> 
      </Suspense>
    </Provider>
  );
}

export default App;
