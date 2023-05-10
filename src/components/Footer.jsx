import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        <h1 className="text-3xl w-full font-bold text-[#00df9a]">Datapulse.</h1>
        <p className="py-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
          optio placeat nesciunt non enim fugit quos neque sapiente soluta
          voluptatibus perferendis dicta magni assumenda necessitatibus.
        </p>
        <div className="flex  justify-between md:w-[75%] ">
          <FaFacebookSquare size={30} className="hover:text-[#00df9a]" />
          <FaInstagram size={30} className="hover:text-[#00df9a]" />
          <FaTwitterSquare size={30} className="hover:text-[#00df9a]" />
          <FaGithubSquare size={30} className="hover:text-[#00df9a]" />
          <FaDribbbleSquare size={30} className="hover:text-[#00df9a]" />
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between mt-6">
        <div>
          <h6 className="font-medium text-gray-600">Solutions</h6>
          <ul>
            <li className="py-2 text-sm">Analytics</li>
            <li className="py-2 text-sm">Marketing</li>
            <li className="py-2 text-sm">Commerce</li>
            <li className="py-2 text-sm">Insights</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-600">Support</h6>
          <ul>
            <li className="py-2 text-sm">Pricing</li>
            <li className="py-2 text-sm">Documentation</li>
            <li className="py-2 text-sm">Guides</li>
            <li className="py-2 text-sm">API Status</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-600">Company</h6>
          <ul>
            <li className="py-2 text-sm">About</li>
            <li className="py-2 text-sm">Blog</li>
            <li className="py-2 text-sm">Jobs</li>
            <li className="py-2 text-sm">Press</li>
            <li className="py-2 text-sm">Carreers</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-600">Legal</h6>
          <ul>
            <li className="py-2 text-sm">Claim</li>
            <li className="py-2 text-sm">Policy</li>
            <li className="py-2 text-sm">Terms</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
