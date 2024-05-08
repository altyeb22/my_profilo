import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import '../App.css'; // استبدل بمسار ملف النمط الخاص بك
import { useTranslation } from 'react-i18next';


const Header = () => {
  const { t, i18n } = useTranslation();

  const switchLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ar' : 'en');
  };
 

  const [isDarkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  useEffect(() => {
    var toggler = document.querySelector(".toggler");
    var nav = document.querySelector(".main-nav");

    const handleClick = () => {
      toggler.classList.toggle("active");
      nav.classList.toggle("active");
    };

    toggler.addEventListener("click", handleClick);

    // Link small screen
    document.querySelectorAll("ul li a").forEach((itm) => {
      itm.addEventListener("click", () => {
        document.querySelector("a.active").classList.remove("active");
        itm.classList.add("active");
        nav.classList.remove("active");
        toggler.classList.remove("active");

      });
    });

    return () => {
      // يتم إزالة الحدث عند تفريغ المكون
      toggler.removeEventListener("click", handleClick);
    };
  }, []); // أضفت سجلًا فارغًا هنا للتأكد من أن الحدث يتم إضافته وإزالته مرة واحدة فقط

  useEffect(() => {
    // Dark mode
    var icon = document.querySelector(".moon");
    var sunIcon = document.querySelector(".sun");

    icon.onclick = function () {
      document.body.classList.add("dark-theme");
      sunIcon.classList.add("iconactiv");
      icon.style.display = "none";
    };

    sunIcon.onclick = function () {
      document.body.classList.remove("dark-theme");
      icon.style.display = "inline-block";
      sunIcon.classList.remove("iconactiv");
    };
  }, []); // يتم تشغيل هذا التأثير فقط عندما يتغير isDarkMode

  useEffect(() => {
    // التحقق من حالة النمط الليلي وتحديث واجهة المستخدم
    if (isDarkMode) {
      // Dark mode is enabled
      document.body.classList.add("dark-theme");
    } else {
      // Dark mode is disabled
      document.body.classList.remove("dark-theme");
    }
  }, [isDarkMode]);



  return (
    <div >
      <header className={`shadow bg-[--primary-color]  fixed w-full top-0  p-1
 z-50 lg:py-3" `}>
        <div className="flex items-center p-2 justify-between lg:px-32" >
          {/* <h1 className="logo text-2xl  small">R7</h1> */}
          <button
            className="bg-[#512da8] text-white w-8 h-8 rounded-full p-1  text-xs  font-F_Medium small"
            onClick={switchLanguage}
          >
            {t('home.switchLanguage')}
          </button>
          <ul className={`main-nav bg-[--primary-color] flex flex-col fixed justify-start pt-3 h-[100vh] top-[3.7rem] gap-20 
          items-center w-full -left-full lg:relative lg:p-0 lg:flex-row lg:justify-center lg:top-auto lg:left-0 lg:h-auto`}>
            <li className="nav-item ">
            <Link to="/my_profilo/" className="nav-link active" >{t('header.navHome')}</Link>

              {/* <a href="#home" className="nav-link active" >{t('header.navHome')}</a> */}
            </li>
            <li className="nav-item">
              <a href="#my-skills" className="nav-link ">{t('header.navSkills')}  </a>
            </li>
            <li className="nav-item">
              <a href="#my-works" className="nav-link">{t('header.navWorks')}</a>
            </li>
            <li className="nav-item">
              <a href="#contact-me" className="nav-link">{t('header.navContact')}</a>
            </li>
            <li className="nav-item">
              <Link to="./blog" className="nav-link">{t('header.navBlog')}</Link>
            </li>
          </ul>
         
          <div className="flex gap-4 items-center">
            <div className="icon-theme" onClick={toggleDarkMode}>
              <div className={`icons relative z-10 cursor-pointer font-bold md:text-3xl w-7 h-7 p-1 flex rounded-full justify-center items-center small ${isDarkMode ? 'dark' : 'light'}`}>
              <img className={`moon `} src="images/moon.png" alt="" onClick={toggleDarkMode} />
<img className={`sun `} src="images/sun.png" alt="" onClick={toggleDarkMode} />

              </div>
            </div>
            <div className="toggler cursor-pointer flex flex-col justify-center gap-1.5 lg:hidden focus:outline-none">
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
