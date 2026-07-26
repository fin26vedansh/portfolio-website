import { lazy, Suspense } from "react";
import "./App.css";
import HeroVisual from "./components/HeroVisual";
import { LoadingProvider } from "./context/LoadingProvider";

const MainContainer = lazy(() => import("./components/MainContainer"));

const App = () => {
  return (
    <LoadingProvider>
      <Suspense>
        <MainContainer>
          <HeroVisual />
        </MainContainer>
      </Suspense>
    </LoadingProvider>
  );
};

export default App;
