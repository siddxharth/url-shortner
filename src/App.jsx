import ShortenedLink from "./components/ShortenLink.jsx";
import Nav from './components/Nav';
import Hero from "./components/Hero.jsx";
import RecentLink from "./components/RecentLink.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <ShortenedLink />
      <RecentLink original_link={"https://reactjs.org/docs/components-and-props.htmlhttps://reactjs.org/docs/components-and-props.html"} short_link={"shrt.co/shrahrths"}/>
      <Footer />
    </>
  );
}

export default App;
