import React, { Suspense, useEffect } from "react";
import { Switch } from "react-router-dom";
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";

import Container from "../Container/Container";
import PublicRoute from "../PublicRoute/PublicRoute";
import PrivatRoute from "../PrivatRoute/PrivatRoute";
import { refreshUser } from "../../redux/User/userOperation";

const Main = React.lazy(() => import("../Main/Main"));
const Home = React.lazy(() => import("../Home/Home"));
const Login = React.lazy(() => import("../Login/Login"));
const Registr = React.lazy(() => import("../Registr/Registr"));
const List = React.lazy(() => import('../MainList/MainList'))
const Page = React.lazy(() => import('../MainPage/MainPage'))

function App({ onRefreshUser }) {
  useEffect(() => {
    onRefreshUser();
  }, [onRefreshUser]);

  return (
    <>
      {" "}
      <Container>
        <Suspense fallback={<p>Loud...</p>}>
          <Switch>
            <PublicRoute restricted exact path="/shows" component={List} />
            <PublicRoute restricted exact path="/shows/:showsId" component={Page} />
            <PublicRoute restricted exact path="/login" component={Login} />
            <PublicRoute restricted exact path="/registr" component={Registr} />
            <PrivatRoute component={Main} path="/library" exact />
            <PublicRoute restricted path="/" component={Home} />
          </Switch>
        </Suspense>
      </Container>

    </>
  );
}

const mapDispatchToProps = {
  onRefreshUser: refreshUser,
};

export default connect(null, mapDispatchToProps)(App);
