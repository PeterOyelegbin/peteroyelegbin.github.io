import Hero from "../../components/Hero"
import Nav from "../../components/Nav"
import Footer from "../../components/Footer"
import About from "./About"
import Skills from "./Skills"

const Home = () => {
  return (
    <>
      <Hero bgImage="bg-home" heading1="Successful Back-end Development" heading2="Based in Lagos, Nigeria. I work as a free-lance API Developer exceptionally skilled in Database Administration." link="/portfolio" linktext="View my portfolio"/>
      <About/>
      <Skills/>
    </>
  )
}

export default Home