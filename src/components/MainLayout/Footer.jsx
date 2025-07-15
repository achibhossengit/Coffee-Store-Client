import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdEmail, MdLocationPin, MdPhone } from "react-icons/md";
import logo from "../../assets/more/logo1.png";
import footerBg from "../../assets/more/13.jpg";
import coffeeBg from "../../assets/more/24.jpg";

const Footer = () => {
  return (
    <footer>
      <div style={{ backgroundImage: `url(${footerBg})` }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-[1300px] mx-auto pt-20 pb-12 px-4 md:px-8">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Logo and Description */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <img className="w-12" src={logo} alt="Expresso Emporium Logo" />
                <h3 className="text-2xl font-bold">Expresso Emporium</h3>
              </div>
              <p className="text max-w-md">
                Always ready to be your friend. Come & Contact with us to share
                your memorable moments, to share with your best companion.
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4">
              <a
                href="#"
                className=" hover:text-primary transition-colors duration-300"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="#"
                className=" hover:text-primary transition-colors duration-300"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="#"
                className=" hover:text-primary transition-colors duration-300"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="#"
                className=" hover:text-primary transition-colors duration-300"
              >
                <FaLinkedin size={20} />
              </a>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-primary">Get in Touch</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 ">
                  <MdPhone className="text-primary" size={20} />
                  <p>+8801786855223</p>
                </div>
                <div className="flex items-center gap-3 ">
                  <MdEmail className="text-primary" size={20} />
                  <p>Info@gmail.com</p>
                </div>
                <div className="flex items-center gap-3 ">
                  <MdLocationPin className="text-primary" size={20} />
                  <p>34 Paris Road, Mirpur, Dhaka</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-primary">Contact with Us</h3>
            <form className="space-y-4">
              <input
                type="text"
                className="input w-full focus:border-primary rounded-lg p-3 placeholder-gray-400 focus:outline-0"
                placeholder="Name"
                required
              />
              <input
                type="email"
                className="input w-full focus:border-primary rounded-lg p-3 placeholder-gray-400 focus:outline-0"
                placeholder="Email"
                required
              />
              <textarea
                className="textarea w-full focus:border-primary rounded-lg p-3 placeholder-gray-400 focus:outline-0 h-32"
                placeholder="Message"
                required
              ></textarea>
              <button type="submit" className="btn btn-primary btn-outline">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* Copyright */}
      <div
        style={{ backgroundImage: `url(${coffeeBg})` }}
        className="border-t border-gray-700 py-3 text-center text-white"
      >
        <p>
          © {new Date().getFullYear()} Expresso Emporium. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
