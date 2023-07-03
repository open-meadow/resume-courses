import Nav from "./components/Navigation";
import Middle from "./components/Middle";
import BigButtons from "./components/BigButtons";

import "./components/page.scss"

export default function Home() {
  return (
    <>
      <Nav />
      <Middle/>
      <BigButtons/>
    </>
  );
}
