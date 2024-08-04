import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppContextProvider } from "./context";
import { Layout } from "./components";
import { AdditionalInfo, CreditInfo, PersonalInfo } from "./steps";

function App() {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="" element={<PersonalInfo />} />
            <Route path="additional" element={<AdditionalInfo />} />
            <Route path="credit" element={<CreditInfo />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppContextProvider>
  );
}

export default App;
