import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa'; // Import icons from react-icons

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-8 mt-2">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Section */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-4">Questions? Call 000-800-919-1694</h3>
            <ul>
              <li><a href="#" className="hover:text-white text-[0.7rem]">FAQ</a></li>
              <li><a href="#" className="hover:text-white text-[0.7rem]">Help Centre</a></li>
              <li><a href="#" className="hover:text-white text-[0.7rem]">Account</a></li>
              <li><a href="#" className="hover:text-white text-[0.7rem]">Media Centre</a></li>
              <li><a href="#" className="hover:text-white text-[0.7rem]">Investor Relations</a></li>
              <li><a href="#" className="hover:text-white text-[0.7rem]">Jobs</a></li>
              <li><a href="#" className="hover:text-white text-[0.7rem]">Ways to Watch</a></li>
            </ul>
          </div>

          {/* Legal Section */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-4">Legal</h3>
            <ul>
              <li><a href="#" className="hover:text-white text-[0.7rem]">Terms of Use</a></li>
              <li><a href="#" className="hover:text-white text-[0.7rem]">Privacy</a></li>
              <li><a href="#" className="hover:text-white text-[0.7rem]">Cookie Preferences</a></li>
              <li><a href="#" className="hover:text-white text-[0.7rem]">Corporate Information</a></li>
              <li><a href="#" className="hover:text-white text-[0.7rem]">Contact Us</a></li>
              <li><a href="#" className="hover:text-white text-[0.7rem]">Speed Test</a></li>
              <li><a href="#" className="hover:text-white text-[0.7rem]">Legal Notices</a></li>
            </ul>
          </div>

          {/* Footer Links Section */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-4">More</h3>
            <ul>
              <li><a href="#" className="hover:text-white text-[0.7rem]">Only on Netflix</a></li>
              <li><a href="#" className="hover:text-white text-[0.7rem]">English</a></li>
              <li><a href="#" className="hover:text-white text-[0.7rem]">Netflix India</a></li>
            </ul>
          </div>

          {/* Follow Us Section */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-white" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-white" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-white" aria-label="YouTube">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-gray-500">
          <p>&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
