import Header from "./components/Header";
import Section3 from "./components/Section3";
import Section6 from "./components/Section6/page";
import Section7 from "./components/Section7/page";
import Section2 from "./components/section2/page";
import Section4 from "./components/section4/page";
import Section5 from "./components/section5/page";
import Footer from "./components/footer/Footer";



export default function Home() {

  return (
    <section className="h-[500vh]">
      <Header />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Footer />
    </section>
  )
}

