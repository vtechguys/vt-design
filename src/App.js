import { BrowserRouter, Route, Routes } from "react-router-dom";
import { breakpoints, ThemeProvider } from "./theme";
import HomePage from "./pages/Home";

export default function App() {
  // the value of defaultTheme can come from req cookies
  return (
    <BrowserRouter>
      <ThemeProvider defaultTheme="light">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}
