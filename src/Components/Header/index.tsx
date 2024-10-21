import OpenAISVG from "../../assets/logo";
import { IoSearchSharp } from "react-icons/io5";


const Header = () => (
  <header className="fixed top-0 left-0 right-0 z-10 transform-gpu transition ease-out-cubic duration-300 bg-base/80 backdrop-blur-xl">
    <nav className="container mx-auto px-4 py-2 flex justify-around items-center relative">
      <OpenAISVG/>
      <div className="space-x-6">
        <a href="#" className=" hover:text-black text-white">Research</a>
        <a href="#" className=" hover:text-black text-white">Products</a>
        <a href="#" className="hover:text-black text-white">Safety</a>
        <a href="#" className="hover:text-black text-white">Company</a>
      </div>
      <IoSearchSharp className="text-2xl hover:rotate-[90deg] transition-[all]"/>
    </nav>
  </header>
);

export default Header