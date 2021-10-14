import { useEffect } from "react";
import { Route, Switch, useHistory } from "react-router";
import styled from "styled-components";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AnimePage from "./pages/AnimePage";

import MainPage from "./pages/MainPage";
import StatusPage from "./pages/StatusPage";
import useStore from "./store";

const AppDiv = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;

  height: 100vh;

  //Wrapper
  margin: 0 8rem 0 8rem;
`;

function App() {
  const history = useHistory();

  const status = useStore(store => store.status);

  useEffect(() => {
    if (status === "") {
      history.push("/");
    } else {
      history.push(`/status/${status}`);
    }
  }, [status]);

  return (
    <AppDiv className="App">
      <Header />
      <Switch>
        <Route path="/" exact>
          <MainPage />
        </Route>
        <Route path="/anime/:animeId">
          <AnimePage />
        </Route>
        <Route path="/status/:status">
          <StatusPage />
        </Route>
      </Switch>
      <Footer />
    </AppDiv>
  );
}

export default App;
