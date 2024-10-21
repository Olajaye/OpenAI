
import { RiTwitterXLine } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";


const Footer = () => {
  return (
    <section className="xl:px-52 mb-5 lg:px-10 px-5">
      <div className="grid lg:grid-cols-5 grid-cols-1 gap-3">
        <div className="space-y-8">
          <div className="flex flex-col space-y-4">
            <h6 className="text-[#B4B4B4] text-[13.48px]">Our research</h6>
            <a href={""} className="text-[13.5px]">Overview</a>
            <a href={""} className="text-[13.5px]"> Index</a>
          </div>


          <div className="flex flex-col space-y-4 mt-6 lg:mt-0">
            <h6 className="text-[#B4B4B4] text-[13.48px]">Latest advancements</h6>
            <a href={""} className="text-[13.5px]">OpenAI o1</a>
            <a href={""} className="text-[13.5px]">OpenAI o1-mini</a>
            <a href={""} className="text-[13.5px]">GPT-4</a>
            <a href={""} className="text-[13.5px]">GPT-4o mini</a>
            <a href={""} className="text-[13.5px]">DALL·E 3</a>
            <a href={""} className="text-[13.5px]">Sora</a>
          </div>
        </div>



        <div className="space-y-8">
          <div className="flex flex-col space-y-4 mt-6 lg:mt-0">
            <h6 className="text-[#B4B4B4] text-[13.48px]">ChatGPT</h6>
            <a href={""} className="text-[13.5px]">For Everyone</a>
            <a href={""} className="text-[13.5px]">For Teams</a>
            <a href={""} className="text-[13.5px]">For Enterprises</a>
            <a href={""} className="text-[13.5px]">ChatGPT login</a>
            <a href={""} className="text-[13.5px]">Download</a>
          </div>


          <div className="flex flex-col space-y-4 mt-6 lg:mt-0">
            <h6 className="text-[#B4B4B4] text-[13.48px]">API</h6>
            <a href={""} className="text-[13.5px]">Platform overview</a>
            <a href={""} className="text-[13.5px]">Pricing</a>
            <a href={""} className="text-[13.5px]">Documentation</a>
            <a href={""} className="text-[13.5px]">API login</a>
          </div>

          <div className="flex flex-col space-y-4 mt-6 lg:mt-0">
            <h6 className="text-[#B4B4B4] text-[13.48px]">Explore more</h6>
            <a href={""} className="text-[13.5px]">OpenAI for business</a>
            <a href={""} className="text-[13.5px]">Stories</a>
          </div>
        </div>


        <div className="flex flex-col space-y-4 mt-6 lg:mt-0">
          <h6 className="text-[#B4B4B4] text-[13.48px]">Safety overview</h6>
          <a href={""} className="text-[13.5px]">Safety overview</a>
        </div>

        <div className="flex flex-col space-y-4 mt-6 lg:mt-0">
          <h6 className="text-[#B4B4B4] text-[13.48px]">Company</h6>
          <a href={""} className="text-[13.5px]">News</a>
          <a href={""} className="text-[13.5px]">Our Charter</a>
          <a href={""} className="text-[13.5px]">Security</a>
          <a href={""} className="text-[13.5px]">Residency</a>
          <a href={""} className="text-[13.5px]">Careers</a>
        </div>

        <div className="flex flex-col space-y-4 mt-6 lg:mt-0">
          <h6 className="text-[#B4B4B4] text-[13.48px]">Terms & policies</h6>
          <a href={""} className="text-[13.5px]">Terms of use</a>
          <a href={""} className="text-[13.5px]">Privacy policy</a>
          <a href={""} className="text-[13.5px]">Brand guidelines</a>
          <a href={""} className="text-[13.5px]">Other policies</a>
        </div>
      </div>





      <div className="mt-28 flex justify-between items-end">
        <div className="flex flex-col space-y-10 md:space-y-2 flex-1 md:flex-none">
          <h4 className="px-2 py-1 bg-[#171717] rounded-md text-center">English</h4>
          <div className="flex space-x-9 md:hidden">
            <a href=""><RiTwitterXLine className="w-4 h-4" /></a>
            <a href=""><FaYoutube className="w-4 h-4"/></a>
            <a href=""><IoLogoLinkedin className="w-4 h-4"/></a>
            <a href=""><FaGithub className="w-4 h-4"/></a>
            <a href=""><BsInstagram className="w-4 h-4"/></a>
            <a href=""><FaTiktok className="w-4 h-4"/></a>
            <a href=""><FaDiscord className="w-4 h-4"/></a>
          </div>
          <p className="text-lg">OpenAI © 2015–2024</p>
        </div>


        <div className="md:flex space-x-9 hidden">
          <a href=""><RiTwitterXLine className="w-5 h-5" /></a>
          <a href=""><FaYoutube className="w-5 h-5"/></a>
          <a href=""><IoLogoLinkedin className="w-5 h-5"/></a>
          <a href=""><FaGithub className="w-5 h-5"/></a>
          <a href=""><BsInstagram className="w-5 h-5"/></a>
          <a href=""><FaTiktok className="w-5 h-5"/></a>
          <a href=""><FaDiscord className="w-5 h-5"/></a>
        </div>
      </div>
    </section>
  

  )
}

export default Footer





















