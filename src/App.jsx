import React from 'react';
import Header from "./components/Header";
import Intro from "./components/Intro";
import Features from "./components/Features";
import Download from "./components/Download";
import FAQ from "./components/FAQ";
import NewsLetter from "./components/NewsLetter";
import Footer from "./components/Footer"

const App = () => {
  return (
    <>
      <Header/>
      <Intro/>
      <Features/>
      <Download/>
      <FAQ/>
      <NewsLetter/>
      <Footer/>

    </>
  )
}

export default App
