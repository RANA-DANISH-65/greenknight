import React, { useRef, useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/logotext.png';
import {
  FaHome,
  FaInfoCircle,
  FaQuestion,
  FaServicestack,
  FaUsers,
  FaUserFriends,
  FaEnvelope,
  FaBars,
  FaTimes,
} from 'react-icons/fa';
import gsap from 'gsap';

const navItems = [
  { icon: <FaHome />, label: 'Home', link: '#home' },
  { icon: <FaInfoCircle />, label: 'About Us', link: '#about' },
  { icon: <FaQuestion />, label: 'Why Choose Us', link: '#why' },
  { icon: <FaServicestack />, label: 'Our Services', link: '#services' },
  { icon: <FaUsers />, label: 'Our Clients', link: '#clients' },
  { icon: <FaUserFriends />, label: 'Our Team', link: '#team' },
  { icon: <FaEnvelope />, label: 'Contact', link: '#contact' },
];

const Navbar = () => {
  const iconRefs = useRef([]);
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [pendingScrollTo, setPendingScrollTo] = useState(null);

  const handleHover = (index) => {
    gsap.to(iconRefs.current[index], {
      scale: 1.75,
      y: -5,
      opacity: 1,
      duration: 0.2,
      ease: 'bounce.out',
    });
  };

  const handleLeave = (index) => {
    gsap.to(iconRefs.current[index], {
      scale: 1,
      y: 0,
      opacity: 0,
      duration: 0.3,
      ease: 'power3.inOut',
    });
  };

  const handleNavigation = async(e, link) => {
    e.preventDefault();
    setMenuOpen(false);
  if (location.pathname === '/') {
    if (link === '#home') {
      // Reload page if already on '/' and clicked Home
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setTimeout(()=>{

        window.location.reload();
      },800)
     
    } else {
      const section = document.querySelector(link);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  } else {
    setPendingScrollTo(link);
    navigate('/');
  }
};

  useEffect(() => {
    if (pendingScrollTo && location.pathname === '/') {
      const scrollToSection = () => {
        const section = document.querySelector(pendingScrollTo);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
          setPendingScrollTo(null); // clear after scroll
        } else {
          // Retry if not ready yet
          setTimeout(scrollToSection, 100);
        }
      };
      scrollToSection();
    }
  }, [location, pendingScrollTo]);

  const isHomePage = location.pathname === '/';

  return (
    <div
      className={`px-4 py-3 flex z-10 justify-between items-center shadow-md w-full fixed top-0 left-0 ${
        isHomePage ? 'bg-white text-[#003566]' : 'bg-gray-900 text-white'
      }`}
    >
      {/* Logo */}
      <div onClick={(e) => handleNavigation(e, '#home')} className="flex cursor-pointer justify-center items-center gap-2 text-2xl font-extrabold">
        <img src={logo} alt="logo" className="w-12 sm:w-14" />
        <h1 className={`${isHomePage ? 'text-[#003566]' : 'text-white'}`}>
          Green Knight
        </h1>
      </div>

      {/* Hamburger icon for small devices */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex gap-6 px-8">
        {navItems.map((item, index) => (
          <li
            key={index}
            className="flex flex-col items-center  group cursor-pointer relative"
            onMouseEnter={() => handleHover(index)}
            onMouseLeave={() => handleLeave(index)}
            onClick={(e) => handleNavigation(e, item.link)}
          >
            <div
              className={`text-xl ${
                isHomePage ? 'text-[#003566]' : 'text-white'
              } opacity-0 transition-transform duration-300`}
              ref={(el) => (iconRefs.current[index] = el)}
            >
              {item.icon}
            </div>
            <span
              className={`text-[18px] mt-1 group-hover:font-bold transition-all duration-300 ${
                isHomePage ? 'text-[#003566]' : 'text-white'
              }`}
            >
              {item.label}
            </span>
          </li>
        ))}
      </ul>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div
          className={`absolute top-20 right-4 bg-white shadow-lg rounded-lg py-4 px-6 flex flex-col gap-4 md:hidden transition-all duration-300 ${
            isHomePage ? 'text-[#003566]' : 'text-gray-800'
          }`}
        >
          {navItems.map((item, index) => (
            <button
              key={index}
              onClick={(e) => handleNavigation(e, item.link)}
              className="flex items-center gap-3 text-base font-medium hover:font-bold transition"
            >
              <span className="text-xl">{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
