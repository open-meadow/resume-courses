import Nav from "./components/Navigation";
import Middle from "./components/Middle";
import BigButtons from "./components/BigButtons";

import "./components/page.scss"
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Middle/>
      <BigButtons/>
      <Footer/>
    </>
  );
}
