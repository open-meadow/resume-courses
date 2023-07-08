import Nav from "./components/Navigation";
import Middle from "./components/Middle";
import BigButtons from "./components/BigButtons";

import "./components/page.scss"
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <>
      <Nav />
      <Middle/>
      <BigButtons/>
      <Testimonials/>
      <Footer/>
    </>
  );
}
