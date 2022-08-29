import Footer from "../../components/Footer"
import Hero from "../../components/Hero"
import Nav from "../../components/Nav"

const Contact = () => {
  return (
    <>
      <Nav/>
      <Hero bgImage="bg-contact" heading1="Contact me right away!" heading2="Specializing in developing bespoke APIs. Please do not hesitate to use the button below if your company needs data storage or if you are looking to hire." link="tel://+2348078828296" linktext="Call me"/>
      <section className="py-10">
        <div className="container mx-auto rounded-lg shadow-lg flex flex-row">
          <div
            className="lg:w-3/5 w-full bg-gradient-to-r from-blue-700 to-blue-400 lg:from-blue-700 lg:via-blue-400 lg:to-transparent rounded-lg text-white p-5">
            {/* container holding the contact form */}
            <div className="lg:w-1/2">
              <h3 className="text-2xl font-extrabold mb-3">Send me a mail</h3>
              <form action="https://formsubmit.co/philipoyelegbin@gmail.com" method="POST"
              >
                <input type="hidden" name="_subject" value="New client!" />
                <input type="hidden" name="_captcha" value="false" />

                <input type="text" name="Full Name" id="fullname" className="bg-slate-300 text-black mb-2 p-2 rounded-md w-full focus:outline-none" placeholder="Full Name" required/><br />

                <input type="email" name="Email" id="email" className="bg-slate-300 text-black mb-2 p-2 rounded-md w-full focus:outline-none" placeholder="Email" required
                /><br />

                <textarea name="Comment" id="message" className="bg-slate-300 text-black mb-2 p-2 rounded-md w-full focus:outline-none" cols="30" rows="5" placeholder="Write your message here..." required></textarea><br />

                <input type="submit" className="bg-white text-black hover:bg-slate-300 px-4 py-2 rounded-lg cursor-pointer" value="SEND"/>
              </form>
            </div>
          </div>

          {/* container holding the image which is hidden on mobile */}
          <div className="w-full hidden lg:w-2/5 lg:flex lg:flex-row">
            <img src="https://cdn.pixabay.com/photo/2013/07/13/13/18/man-160788__340.png" className="h-96" alt="contact_image"/>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  )
}

export default Contact