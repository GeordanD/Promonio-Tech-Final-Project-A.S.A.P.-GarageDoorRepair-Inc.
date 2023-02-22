import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import NavBar from "./components/navBar";


function App() {
  return (
    <>
      <div className="App">
        <Header/>
        <NavBar />
        <Footer/>
      </div>
    </>
  );
}

export default App;
