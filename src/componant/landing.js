import React from 'react';
import { useTranslation } from 'react-i18next';
// import { Link } from 'react-router-dom';
// import Header from './componant/header';
// import HomePage from './componant/landing';
import Skills from '../componant/skills';
import MyWorks from '../componant/MyWorks';
import ContactMe from '../componant/ContactMe';
// import { IconChevronUp } from '@tabler/icons-react';
  import ScrollTopButton from '../up';
  // import ReactTutorial from './componant/post';
  // import BlogPage from './blog/BlogPage';

function HomePage({ textDirection }) {
  const { t } = useTranslation();

 

  return (
    <div className={`pt-10 my-10 ${textDirection}`} id="home">
      <div className="flex flex-col-reverse gap-0 items-center w-full ">
        <div className="info flex justify-center flex-col gap-0 items-center text-center p-2">
          {/* <h1 className="text-xl font-Montserrat small">{t('home.greeting')}</h1> */}
          <h2 className="w-full mt-6 p-4 text-xl bg-[0 0] bg-clip-text bg-left-top bg-[#512da8] 
            strok-[--primary-color] text-transparent Montserrat lg:text-xl ">
            {t('home.name')}
          </h2>
          <ul className="dynamic-text overflow-hidden h-5">
            <li>
              <span className="auto-type small"></span>
            </li>
          </ul>
          <p className="mb-8 max-w-sm font-F_Medium text-sm small">{t('home.developer')}</p>
         
        </div>

        <img
          className="w-40 lg:w-64 lg:mb-6 rounded-full border aos-init aos-animate"
          src="images/my.jpg"
          data-aos="fade-down"
          data-aos-duration="1600"
          data-aos-easing="ease-in"
          alt="3D"
        />
          
      </div>
      <ContactMe />
      <Skills />
      <MyWorks />
   
      <ScrollTopButton />
    </div>


        
        // <ScrollTopButton />

  );
};

export default HomePage;
