import ShortenedLink from "./components/ShortenLink.jsx";
import Nav from './components/Nav';
import Hero from "./components/Hero.jsx";
import History from "./components/History.jsx";
import { useEffect, useState } from "react";


function App() {
  const [currentTime, setCurrentTime] = useState('Current Time');

  const fetchCurrentTime = () => {
    fetch('http://localhost:3001/time')
      .then((response) => response.json())
      .then((data) => {
        setCurrentTime(data.time);
      });
  };
  useEffect(() => {
    const updateCurrentTime = () => {
      const time = new Date();
      setCurrentTime(time);
    }
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
