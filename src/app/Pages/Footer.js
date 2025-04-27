import Image from "next/image";
import Logo from "../../../public/lg.jpeg";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-6 md:px-[7%] grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo & Gym Name */}
        <div className="flex flex-col items-center md:items-start">
          <Image src={Logo} alt="Gym Logo" width={80} height={80} />
          <h2 className="text-2xl font-bold mt-2">Shotokan Martialarts Academy</h2>
          <p className="text-gray-400 text-sm mt-2 text-center md:text-left">
            Transform your body, transform your life.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-yellow-400">Home</a></li>
            <li><a href="#" className="hover:text-yellow-400">About</a></li>
            <li><a href="#" className="hover:text-yellow-400">Workout Programs</a></li>
            <li><a href="#" className="hover:text-yellow-400">Recipes</a></li>
            <li><a href="#" className="hover:text-yellow-400">Store</a></li>
            <li><a href="#" className="hover:text-yellow-400">Contact</a></li>
          </ul>
        </div>

        {/* Contact & Social Media */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <p className="text-gray-300">📍 Aadhrsh vidhya mandir school, opp. baba property, Sector 26, Pratap Nagar, Jaipur, Rajasthan 302033</p>
          <p className="text-gray-300">📧 contact@shotocan.com</p>
          <p className="text-gray-300">📞 +91 74140 69375</p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-yellow-400 text-2xl"><FaFacebook /></a>
            <a href="#" className="text-gray-400 hover:text-yellow-400 text-2xl"><FaInstagram /></a>
            <a href="#" className="text-gray-400 hover:text-yellow-400 text-2xl"><FaTwitter /></a>
            <a href="#" className="text-gray-400 hover:text-yellow-400 text-2xl"><FaYoutube /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-gray-500 text-sm border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Ram's Fitness Impact Club. All Rights Reserved.
      </div>
    </footer>
  );
}
