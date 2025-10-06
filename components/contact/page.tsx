'use client';

import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import './contact.css'; // Import custom CSS

const socialLinks = [
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/share/1T2p4Mwfqj/',
    icon: FaFacebook,
    color: '#1877f2',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/realupperpikin01?igsh=MTd4c2NucTZkbjV3OA==',
    icon: FaInstagram,
    color: '#e4405f',
  },
  {
    name: 'TikTok',
    url: 'https://www.tiktok.com/@realupperpikin01?_t=ZS-90KLsf2ATKC&_r=1',
    icon: FaTiktok,
    color: '#000000',
  },
  {
    name: 'YouTube',
    url: 'https://youtube.com/@upperpikin?si=5DRXmcD1U75md1kS',
    icon: FaYoutube,
    color: '#ff0000',
  },
  {
    name: 'X',
    url: 'https://x.com/ivygoddess7?t=rsW8hMejVg6wbUH1gXju_g&s=09',
    icon: FaXTwitter,
    color: '#000000',
  },
];

const ContactPage = () => {
  return (
    <section className="contact-section">
      <motion.h1
        className="contact-title"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Follow Us
      </motion.h1>
      <div className="social-icons">
        {socialLinks.map((link, index) => {
          const Icon = link.icon;
          return (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon />
            </motion.a>
          );
        })}
      </div>
    </section>
  );
};

export default ContactPage;
