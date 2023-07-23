import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PasswordChecker from "./pages/PasswordChecker";

function App() {
  return (
    <>
      <ToastContainer position="top-center" />
      <PasswordChecker />
    </>
  );
}

export default App;
