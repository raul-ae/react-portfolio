import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/about" component={About} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
