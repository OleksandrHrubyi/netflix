import React, { Suspense } from "react";
import { Switch } from "react-router-dom";
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import MainLayout from "components/MainLayout/MainLayout";
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

  return (
    <>
      {" "}
      <Container>
        <Suspense fallback={<p>Loud...</p>}>
          <MainLayout>
            <Switch>
              <PrivatRoute component={List} path="/shows" exact />
              <PublicRoute exact path="/shows/:showsId" component={Page} />
              <PublicRoute restricted exact path="/login" component={Login} />
              <PublicRoute restricted exact path="/registr" component={Registr} />
              <PublicRoute restricted exact path="/shows" component={List} />
              <PublicRoute path="/" component={Home} />
            </Switch>
          </MainLayout>
        </Suspense>
      </Container>
    </>
  );
}

const mapDispatchToProps = {
  onRefreshUser: refreshUser,
};

export default connect(null, mapDispatchToProps)(App);
