import "./HomePage.css";
import Navbar from "@/components/Navbar";
import Header from "./components/Header";
import Statisc from "./components/Statisc";

export default function HomePage() {
  return (
    <div className="home-page">
      <Navbar />
      <Header />
      <Statisc />
    </div>
  );
}
