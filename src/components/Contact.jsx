import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";


export default function Contact() {
  return (
    <>
      <div className="container contact" id="contact">
        <h1>CONTACT ME</h1>
        <div className="contact-icon" data-aos="zoom-in-up"
              data-aos-duration="1000">
          <a href='https://www.instagram.com/koelmeshram' target='_blank' className="items"><FaInstagram className='icons'/></a>
          <a href='https://www.facebook.com/koelmeshram/' target='_blank' className="items"><CiFacebook className='icons' /></a>
          <a href='https://www.linkedin.com/in/koyal-meshram' target='_blank' className="items"><CiLinkedin className='icons'/></a>
          <a href='https://www.github.com/koyalmeshram' target='_blank' className="items"><FaGithub className='icons'/></a>
          <a href='mailto:koyalmeshram1205@gmail.com' target='_blank' className="items"><SiGmail className='icons'/></a>
        </div>
      </div>
    </>
  )
}
