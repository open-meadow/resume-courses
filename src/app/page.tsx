import Nav from "./components/Navigation";
import Middle from "./components/Middle";
import BigButtons from "./components/BigButtons";

import "./components/page.scss"
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import ContactUs from "./components/ContactUs";

export default function Home() {
  return (
    <>
      <Nav />
      <Middle/>
      <BigButtons/>
      <Testimonials/>
      <ContactUs/>
      <Footer/>
    </>
  );
}