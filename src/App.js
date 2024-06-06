import "./App.css";
import AppRouter from "./router";
import Header from "./Components/header";
import Footer from "./Components/footer";
import { HorizontalRule } from "@mui/icons-material";

function App() {
  return (
    <div className="App">
      <Header />
      <AppRouter />
      <Footer />
    </div>
  );
}

export default App;
