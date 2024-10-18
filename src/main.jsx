import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "./components/common/ThemeContext.jsx";
import PopUp from "./components/Popup/PopUp.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <App />
      {/* <PopUp /> */}
    </ThemeProvider>
  </StrictMode>
);
