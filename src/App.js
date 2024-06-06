import "./App.css";
import AppRouter from "./router";
import Header from "./Components/header";
import Footer from "./Components/footer";

function App() {
  return (
    <>
      <Header />
      <div className="mt-16 mb-16">
        <AppRouter />
      </div>
      <Footer />

    </>
  );
}

export default App;
