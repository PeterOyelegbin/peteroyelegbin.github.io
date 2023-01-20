import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import axios from "axios";

const Contact = () => {
  // variables and states for star rating
  const colors = {
    orange: "orange", white: "#FFF"
  };
  const stars = Array(5).fill(0);
  const [current, setCurrent] = useState(0);
  const [hover, setHover] = useState(undefined);

  // variable ans state management for api requests
  const url = "https://portfolio-api.up.railway.app/peter-reviews";
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [feedback, setFeedback] = useState(null);
  const [loader, setLoader] = useState(false);
  const [errormsg, setErrormsg] = useState(null);
  const [user, setUser] = useState({
    full_name: "", email: "", comment: ""
  });

  // function for updating the ratings when click and at hover state
  const handleRate = value => {
    setCurrent(value)
  };
  const handleMouseDown = value => {
    setHover(value)
  };
  const handleMouseUp = () => {
    setHover(undefined)
  };

  const [data, setData] = useState(null);

  // function for handing form submission
  const handleSend = (e) => {
    e.preventDefault();
    setLoader(true);

    const sendFeedback = async () => {
      try {
        let newFeedback = [{full_name: user.full_name, email: user.email, comment: user.comment, ratings: current}]
        await axios.post(url, newFeedback);
        setData(newFeedback);
      } catch (error) {
        error?.message && setErrormsg("Unable to send feedback");
      } finally {
        setLoader(false); 
      }
    };

    sendFeedback();
  };

  // function for handling changes in the input fields
  const handleChange = (e) => {
    const {value, name} = e.target
    setUser({...user, [name]: value})
  }

  useEffect(() => {
    // asynchronous function for getting testimonials on page load
    const getData = async() => {
      try {
        const resp = await axios.get(url);
        setFeedback(resp?.data);
      } catch (error) {
        setError(error?.message && "Unable to load testimonial!");
      } finally {
        setLoading(false); 
      }
    };

    getData();
  }, [url])
  

  return (
    <>
      <header className={`h-screen bg-contact bg-no-repeat bg-cover bg-center md:bg-right bg-fixed mb-5`} id="home">
        <div className="flex flex-col justify-center items-center h-full bg-black bg-opacity-50 text-center">
          <div className="flex flex-col justify-center items-center gap-3 w-11/12 md:gap-5 md:w-3/5" data-aos="zoom-in-up" data-aos-easing="linear" data-aos-duration="2000">
            <h1 className="font-extrabold text-slate-300 text-3xl md:text-5xl">Contact me right away!</h1>

            <h3 className="font-bold text-slate-300 text-xl md:text-3xl">Specializing in developing bespoke APIs. Please do not hesitate to use the button below if your company needs data storage or if you are looking to hire.</h3>
            <a className="btn" href="tel://+2348078828296">Call me</a>
          </div>
        </div>
      </header>
      
      <section className="p-5 my-5 xl:px-10">
        <div className="rounded-lg shadow-lg flex flex-col items-center gap-3 lg:flex-row">
          <div className="lg:w-3/5 w-full bg-gradient-to-r from-slate-700 to-slate-400 lg:from-slate-700 lg:via-slate-400 lg:to-transparent rounded-lg text-white p-5">
            {/* container holding the contact form */}
            <div className="lg:w-1/2">
              <h3 className="text-2xl font-semibold mb-3">Rate my services</h3>
              <form onSubmit={handleSend}>
                <div className="form-group">
                  <label htmlFor="full_name">Full name</label>
                  <input type="text"id="full_name" name="full_name" value={user.full_name} onChange={handleChange} placeholder="Enter full Name" minLength="4" maxLength="50" required/>
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" value={user.email} onChange={handleChange} placeholder="example@example.com" minLength="8" maxLength="50" required/>
                </div>
                <div className="form-group">
                  <label htmlFor="comment">Comment</label>
                  <textarea id="comment" name="comment" value={user.comment} onChange={handleChange} cols="30" rows="5" placeholder="Write your message here..." minLength="50" maxLength="150" required></textarea>
                </div>
                <div className='flex justify-center gap-2 my-3'>
                  {stars.map((_, index) => {
                    return <FaStar key={index} className="cursor-pointer" onClick={() => handleRate(index + 1)} color={(hover || current) > index ? colors.orange : colors.white} onMouseOver={() => handleMouseDown(index + 1)} onMouseLeave={handleMouseUp}/>
                  })}
                </div>

                {loader ? <p className='text-center text-white my-3'>Loading...</p> : error ? <p className='text-center text-red-500 my-3'>{errormsg}</p> : data && <p className='text-center text-white my-3'>Message sent.</p> }

                <button className="btn rounded-lg my-0">SEND</button>
              </form>
            </div>
          </div>

          {/* container holding the map */}
          <div className="w-full lg:w-2/5 lg:flex lg:flex-row">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d506.8595326270906!2d3.470029635108708!3d6.451497344755038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sng!4v1663527297558!5m2!1sen!2sng" height="450" className="w-full mx-auto" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>

        <div className="py-5 my-5">
          <h2 className="text-center">What are people saying?</h2>
          <div className="flex flex-col justify-center gap-3 md:flex-row">
            {loading ? <h3 className="text-center text-2xl">Loading...</h3> : error ? <h3 className="text-center text-2xl">{error}</h3> : feedback.length < 1 ? <h3 className="text-center text-2xl">Nothing yet</h3> : feedback && feedback.results?.map((obj) => {
              return (
                <div className="text-center shadow-md shadow-gray-500 rounded-2xl hover:-translate-y-2 duration-300 ease-in-out p-3 md:w-1/3" key={obj.id}>
                  <p>Rated: {obj.ratings}.0</p>
                  <p>{obj.comment}</p>
                  <h3 className="text-xl font-semibold">{obj.full_name}</h3>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact