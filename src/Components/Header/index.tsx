import OpenAISVG from "../../assets/logo";
import { IoSearchSharp } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";

const Header = () => (
  <header className="fixed top-0 left-0 right-0 transform-gpu transition ease-out-cubic duration-300 bg-base/80 backdrop-blur-xl z-[102] text-nav-label m-auto w-full m:py-0  transition-header ease-curve-d" aria-label="Main navigation">
    <nav className="mx-auto py-2 px-5 md:px-48 flex justify-between z-50 relative items-center " aria-label="Main" data-orientation="horizontal" dir="ltr">
      <OpenAISVG/>
      <div className="space-x-7 hidden md:block">
        <a href="#" className=" hover:text-black text-white">Research</a>
        <a href="#" className=" hover:text-black text-white">Products</a>
        <a href="#" className="hover:text-black text-white">Safety</a>
        <a href="#" className="hover:text-black text-white">Company</a>
      </div>
      <div className="flex space-x-3 items-center">
        <IoSearchSharp className="text-xl md:text-2xl hover:rotate-[90deg] transition-[all]"/>
        <FiMenu className="w-5 h-5 md:hidden"/>
      </div>
      
    </nav>
  </header>
);

export default Header