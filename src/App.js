// CONTEXT
import ContextProvider from "./context";
// COMPONENTS
import { Footer } from "./components/Footer";
import { Recap } from "./components/Recap";
import { Title } from "./components/Title";
import { Water } from "./components/Water";
import { Food } from "./components/Food";
import { Kcal } from "./components/Kcal";

function App() {
  return (
    <ContextProvider>
      <div className="container">
        <div className="content">
          <Title />
          <Kcal />
          <Recap />
          <Food />
          <Water />
        </div>
        <Footer />
      </div>
    </ContextProvider>
  );
}

export default App;
