import { MainPage } from "./pages/MainPage";
import { CalculatorStoreProvider } from "./stores/CalculatorStore";
import { ThemeProvider } from "./providers/ThemeProvider";

export const App = () => (
  <CalculatorStoreProvider>
    <ThemeProvider>
      <MainPage />
    </ThemeProvider>
  </CalculatorStoreProvider>
);

export default App;
