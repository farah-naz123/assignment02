import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Hero from "./components/hero";

const HomePage=() => {
  return(
    <div>
      <a href="/about">About</a>
      <Header></Header>
      <h1>HomePage</h1>
      <h2>This is home page</h2>
      <Hero></Hero>
      <Footer></Footer>
    </div>
  )
};
export default HomePage;