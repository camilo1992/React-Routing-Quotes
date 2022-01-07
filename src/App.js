import React, { Suspense } from "react";
import NewQuote from "./components/Pages/New-quote";
import AllQuotes from "./components/Pages/All-quotes";
import DetailQuote from "./components/Pages/Detail-quote";
import { Route, Switch, Redirect } from "react-router-dom";
import Layout from "./components/layout/Layout";
import NotFound from "./components/Pages/NotFound";
import LoadingSpinner from "./components/UI/LoadingSpinner";

const NewQuopte = React.lazy(() => import("./components/Pages/New-quote"));
function App() {
  return (
    <Layout>
      <Suspense
        fallback={
          <div className="centered">
            <LoadingSpinner />
          </div>
        }
      >
        <Switch>
          <Route path="/" exact>
            <Redirect to="/all-quotes" />
          </Route>
          <Route path="/new-quote">
            <NewQuote />
          </Route>
          <Route path="/all-quotes" exact>
            <AllQuotes />
          </Route>
          <Route path="/all-quotes/:quoteId">
            <DetailQuote />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
