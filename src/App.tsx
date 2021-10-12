import { Route, Switch } from "react-router";
import styled from "styled-components";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AnimePage from "./pages/AnimePage";

import MainPage from "./pages/MainPage";

const AppDiv = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;

  height: 100vh;

  //Wrapper
  margin: 0 8rem 0 8rem;
`;

function App() {
  return (
    <AppDiv className="App">
      <Header />
      <Switch>
        <Route path="/" exact>
          <MainPage />
        </Route>
        <Route path="/anime/:animeId" exact>
          <AnimePage />
        </Route>
      </Switch>
      <Footer />
    </AppDiv>
  );
}

export default App;
