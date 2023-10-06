import './App.css';
import { CTA, Brand, Navbar } from './component';
import { Footer, Blog, Possibility, Header, Features, WhatGPT } from './containers';



function App() {
  return (
    <div className="App">
      <div className="gradient_bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
