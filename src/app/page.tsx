import Image from "next/image";
import Nav from "./components/Navigation";
import Middle from "./components/Middle";
import BigButtons from "./components/BigButtons";

export default function Home() {
  return (
    <>
      <Nav />
      <Middle/>
      <BigButtons/>
    </>
  );
}
