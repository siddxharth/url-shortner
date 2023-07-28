import ShortenedLink from "./components/ShortenLink.jsx";
import Nav from './components/Nav';
import Hero from "./components/Hero.jsx";
import History from "./components/History.jsx";
import { useEffect, useState } from "react";
const express_url = process.env.REACT_APP_EXPRESS_URL


function App() {
  const [currentTime, setCurrentTime] = useState('Current Time');

  const fetchCurrentTime = async () => {
    // await fetch("http://localhost:3001/time")
    console.log(express_url);
    await fetch(express_url)
      .then((response) => response.json())
      .then((data) => {
        setCurrentTime(data.time);
      });
  };
  useEffect(() => {
    fetchCurrentTime();
    setInterval(fetchCurrentTime, 1000);
  }, []);


  return (
    <div>
      Current Time
      {currentTime}
      {/* <Nav />
      <Hero />
      <ShortenedLink />
      <History /> */}
    </div>
  );
}

export default App;
