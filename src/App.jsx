import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Loader from './components/Loader'
import SharedLayout from './components/SharedLayout';
import 'react-toastify/dist/ReactToastify.css';

const Contact = lazy(() => import('./pages/contact/Contact'));
const Home = lazy(() => import("./pages/home/Home"));
const Portfolio = lazy(() => import('./pages/portfolio/Portfolio'));

const App = () => {
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
    <Suspense fallback={<Loader/>}>
      <Routes>
        <Route path='/' element={<SharedLayout/>}>
          <Route index element={<Home/>} />
          <Route path="portfolio" element={<Portfolio/>} />
          <Route path="contact" element={<Contact/>} />
        </Route>
      </Routes>
      <ToastContainer position='top-right' autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
    </Suspense>
  )
}

export default App