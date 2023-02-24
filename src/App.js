import "./App.css";
import Footer from "./components/footer";
import FooterLinks from "./components/footerLinks";
import Header from "./components/header";
import MyInfoFooter from "./components/myInfoFooter";
import NavBar from "./components/navBar";


function App() {
  return (
    <>
      <div className="App">
        <Header/>
        <NavBar />
        <FooterLinks />
        <Footer />
        <MyInfoFooter/>
      </div>
    </>
  );
}

export default App;
