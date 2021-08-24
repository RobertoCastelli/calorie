// CONTEXT
import ContextProvider from "./context"
// COMPONENTS
import { Footer } from "./components/Footer"
import { Recap } from "./components/Recap"
import { Title } from "./components/Title"
import { Water } from "./components/Water"
import { Food } from "./components/Food"
import { Detail } from "./components/Detail"

function App() {
  return (
    <ContextProvider>
      <div className="container">
        <div className="content">
          <Title />
          <Recap />
          <Water />
          <Food />
          <Detail />
        </div>
        <Footer />
      </div>
    </ContextProvider>
  )
}

export default App
