import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loader from './components/Loader'
import SharedLayout from './components/SharedLayout';
import Contact from './pages/contact/Contact';
import Home from "./pages/home/Home";
import Portfolio from './pages/portfolio/Portfolio';

const App = () => {
  const [load, setLoad] = useState(true);

  useEffect(() => {
    setInterval(() => {
      setLoad(false);
    }, 3000);
  }, []);

  // whatsapp chatbot
  (function () {
    var options = {
      whatsapp: "+2348078828296", // WhatsApp number
      call_to_action: "Hire me", // Call to action
      position: "right", // Position may be 'right' or 'left'
    };
    var proto = document.location.protocol,
      host = "getbutton.io",
      url = proto + "//static." + host;
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.async = true;
    s.src = url + "/widget-send-button/js/init.js";
    s.onload = function () {
      WhWidgetSendButton.init(host, proto, options);
    };
    var x = document.getElementsByTagName("script")[0];
    x.parentNode.insertBefore(s, x);
  })();

  return (
    <>
      {load ? <Loader/> : <Routes>
        <Route path='/' element={<SharedLayout/>}>
          <Route index element={<Home/>} />
          <Route path="portfolio" element={<Portfolio/>} />
          <Route path="contact" element={<Contact/>} />
        </Route>
      </Routes>}
    </>
  )
}

export default App