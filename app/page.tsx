import Approach from "./component/Approach";
import Experience from "./component/Experience";
import Footer from "./component/Footer";
import Grid from "./component/Grid";
import Hai from "./component/Hai";
import Hero from "./component/Hero";
import Header from "./component/Navbar";
import Project from "./component/Project";

export default function Home() {
  return (

    <main className="relative bg-darkBlue flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Header/>
      <Hero/>
      <Grid/>
      <Experience/>
      <Project/>
      <Hai/>
      <Approach/>
      <Footer/>
      </div>
    </main>
  )
}
