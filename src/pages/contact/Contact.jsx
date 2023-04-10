import { useEffect, useState } from "react";
import { FaExclamation, FaStar } from "react-icons/fa";
import axios from "axios";
import { toast } from "react-toastify";

const Contact = () => {
  // variable and state management for api requests
  const url = `${import.meta.env.VITE_APP_API_URL}/reviews`
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [feedback, setFeedback] = useState(null);
  const [user, setUser] = useState({
    full_name: "", email: "", comment: "", rating: 5
  });

  const disabledBtn = (user.full_name === "" || user.full_name.length < 4 || user.email == "" || !user.email.includes("@") || user.comment == "" || user.comment.length < 50)

  const errorMessage = {
    full_name: "Required and must be minimum of 4 character", email: "Required and must be a valid email address", comment: "Required and must be minimum of 50 character"
  }

  // function for handing form submission
  const handleSend = (e) => {
    e.preventDefault();

    const sendFeedback = async () => {
      try {
        let newFeedback = {full_name: user.full_name, email: user.email, comment: user.comment, ratings: user.rating}
        await axios.post(url, newFeedback);
        toast.success("Message sent!")
        setUser({full_name: "", email: "", comment: "", rating: 5})
      } catch (error) {
        error?.message && toast.error("Unable to send feedback");
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
          <div className="lg:w-2/5 w-full bg-gradient-to-r from-slate-700 to-slate-500 lg:from-slate-700 lg:via-slate-500 lg:to-transparent rounded-lg text-white p-5">
            {/* container holding the contact form */}
            <div className="lg:w-3/4">
              <h3 className="text-2xl font-semibold mb-3">Rate my services</h3>
              <form onSubmit={handleSend}>
                <div className="form-group">
                  <label htmlFor="full_name">Full name</label>
                  <input type="text"id="full_name" name="full_name" value={user.full_name} onChange={handleChange} placeholder="Enter full Name" minLength="4" maxLength="50" required/>
                  {(user.full_name == "" || user.full_name.length < 4) && <p className="font-bold text-xs text-red-500 flex items-center"><FaExclamation/> {errorMessage.full_name}</p>}
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" value={user.email} onChange={handleChange} placeholder="example@example.com" minLength="8" maxLength="50" required/>
                  {(user.email == "" || !user.email.includes("@")) && <p className="font-bold text-xs text-red-500 flex items-center"><FaExclamation/> {errorMessage.email}</p>}
                </div>

                <div className="form-group">
                  <label htmlFor="comment">Comment</label>
                  <textarea id="comment" name="comment" value={user.comment} onChange={handleChange} cols="30" rows="5" placeholder="Write your message here..." minLength="50" maxLength="150" required></textarea>
                  {(user.comment == "" || user.comment.length < 50) && <p className="font-bold text-xs text-red-500 flex items-center"><FaExclamation/> {errorMessage.comment}</p>}
                </div>

                <div className="form-group">
                  <label htmlFor="rating" className="flex items-center gap-1">Rate me: {user.rating}<FaStar className="text-base text-yellow-500"/></label>
                  <input type="range" name="rating"  min={0} max={5} value={user.rating} onChange={handleChange} />
                </div>

                <button type="submit" disabled={disabledBtn} className="btn rounded-xl my-0 disabled:bg-blue-300">SEND</button>
              </form>
            </div>
          </div>

          {/* container holding the map */}
          <div className="w-full lg:w-3/5 lg:flex lg:flex-row">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d472.76707592911737!2d3.398877832152075!3d6.609736235142322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b93d4a81745b5%3A0xd36df37dd579930b!2sAllen%20Children%20School!5e0!3m2!1sen!2sng!4v1681140156616!5m2!1sen!2sng" height="450" className="w-full mx-auto" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>

        <div className="py-5 my-5">
          <h2 className="text-center">What are people saying?</h2>
          <div className="flex flex-col justify-center gap-3 md:flex-row">
            {loading ? <h3 className="text-center text-2xl">Loading...</h3> : error ? <h3 className="text-center text-2xl">{error}</h3> : feedback.length < 1 ? <h3 className="text-center text-2xl">Nothing yet</h3> : feedback && feedback?.map((obj) => {
              return (
                <div className="text-center shadow-md shadow-gray-500 rounded-2xl hover:-translate-y-2 duration-300 ease-in-out p-3 md:w-1/3" key={obj.id}>
                  <p className="flex items-center font-semibold mb-2">Rated: {obj.ratings}<FaStar className="text-yellow-500"/></p>
                  <p>{obj.comment}</p>
                  <h3 className="text-xl font-semibold mt-2">{obj.full_name}</h3>
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