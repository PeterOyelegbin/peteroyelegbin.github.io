import { useState } from "react";
import {axiosInstance} from '../../hooks/axiosInstance';
import { useAxiosGet } from "../../hooks/useAxiosAsync";
import Footer from "../../components/Footer"
import Hero from "../../components/Hero"
import Nav from "../../components/Nav"

const Contact = () => {
  const url = "/testimonial";
  const {loading, error, data: feedback} = useAxiosGet(url)
  const [loader, setLoader] = useState(false);
  const [errormsg, setErrormsg] = useState(null);
  const [user, setUser] = useState({
    name: "", email: "", testimony: ""
  });

  const [data, setData] = useState(null)

  const handleSend = (e) => {
    e.preventDefault();
    setLoading(true);
    const sendFeedback = async () => {
      try {
        let newFeedback = [{name: user.name, email: user.email, testimony: user.testimony}]
        await axiosInstance.post("/testimonial-create", newFeedback);
        setLoader(false); setData(newFeedback);
      } catch (error) {
          setLoader(false); error?.message && setErrormsg("Unable to send feedback");
      }
    };
    sendFeedback();
  };

  const handleChange = (e) => {
    const {value, name} = e.target
    setUser({...user, [name]: value})
  }

  return (
    <>
      <Nav/>
      <Hero bgImage="bg-contact" heading1="Contact me right away!" heading2="Specializing in developing bespoke APIs. Please do not hesitate to use the button below if your company needs data storage or if you are looking to hire." link="tel://+2348078828296" linktext="Call me"/>
      <section className="px-2 py-5 md:px-5">
        <div className="container mx-auto rounded-lg shadow-lg flex items-center flex-row">
          <div className="lg:w-3/5 w-full bg-gradient-to-r from-slate-700 to-slate-400 lg:from-slate-700 lg:via-slate-400 lg:to-transparent rounded-lg text-white p-5">
            {/* container holding the contact form */}
            <div className="lg:w-1/2">
              <h3 className="text-2xl font-semibold mb-3">Rate my services</h3>
              <form onSubmit={handleSend}>
                <div className="form-group">
                  <label htmlFor="name">Full name</label>
                  <input type="text" name="name" value={user.name} onChange={handleChange} placeholder="Enter full Name" required/>
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" name="email" value={user.email} onChange={handleChange} placeholder="example@example.com" required/>
                </div>
                <div className="form-group">
                  <label htmlFor="testimony">Comment</label>
                  <textarea name="testimony" value={user.testimony} onChange={handleChange} cols="30" rows="5" placeholder="Write your message here..." required></textarea>
                </div>

                {loader ? <p className='text-center text-white my-3'>Loading...</p> : error ? <p className='text-center text-red-500 my-3'>{errormsg}</p> : data && <p className='text-center text-white my-3'>Message sent.</p> }

                <button className="btn rounded-lg my-0">SEND</button>
              </form>
            </div>
          </div>

          {/* container holding the image which is hidden on mobile */}
          <div className="w-full hidden lg:w-2/5 lg:flex lg:flex-row">
            <img src="https://cdn.pixabay.com/photo/2013/07/13/13/18/man-160788__340.png" className="h-96" alt="contact_image"/>
          </div>
        </div>

        <div className="px-2 my-5">
          <h2 className="text-center">What are people saying?</h2>
          <div className="flex flex-col justify-center gap-3 md:flex-row">
            {loading ? <h3 className="text-center text-2xl">Loading...</h3> : error ? <h3 className="text-center text-2xl">{error}</h3> : feedback.testimonial.length < 1 ? <h3 className="text-center text-2xl">Nothing yet</h3> : feedback.testimonial?.map((obj) => {
              return (
                <div className="text-center shadow-lg shadow-gray-500 rounded-lg hover:-translate-y-2 duration-300 ease-in-out p-3 md:w-1/3" key={obj.id}>
                  <p>{obj.testimony}</p>
                  <h3 className="text-xl font-semibold">{obj.name}</h3>
                </div>
              )
            })}
          </div>
        </div>
      </section>
      <Footer/>
    </>
  )
}

export default Contact