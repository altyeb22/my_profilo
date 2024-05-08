import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


import './App.css';
import Header from './componant/header';
import HomePage from './componant/landing';
import Skills from './componant/skills';
import MyWorks from './componant/MyWorks';
import ContactMe from './componant/ContactMe';
// import { IconChevronUp } from '@tabler/icons-react';
  import ScrollTopButton from './up';
  import ReactTutorial from './blog/post';
  import BlogPage from './blog/BlogPage';
  import FlutterTutorialContent from './blog/flutter';

  // import './i18n';


function App() {
  
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js';
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      // Initialize AOS after the script is loaded
      window.AOS.init({
        duration: 3000,
        easing: 'ease-in-out',
        once: true
      });
    };

    // Remove the script from the head when the component unmounts
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <Router>
    <div className="App">
      <Header />
      <div className='mx-4 md:mx-12'>
        <Routes>
          {/* تحديد الصفحة الرئيسية أولاً */}
          <Route path="/my_profilo/" element={<HomePage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="blog/post" element={<ReactTutorial />} />
          <Route path="blog/flutter" element={<FlutterTutorialContent />} />
          
          {/* عناصر إضافية خارج نطاق التوجيه */}
          <Route path="/skills" element={<Skills />} />
          <Route path="/myworks" element={<MyWorks />} />
          <Route path="/contactme" element={<ContactMe />} />
          <Route path="/scrolltop" element={<ScrollTopButton />} />
        </Routes>
      </div>
      <Footer />
    </div>
  </Router>
  );
}


function Footer() {
  const { t } = useTranslation();

  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    // دالة للحصول على التاريخ الحالي
    const getCurrentDate = () => {
      const date = new Date();
      const options = { year: 'numeric'};
      return date.toLocaleDateString('en-US', options);
    };

    // تحديث قيمة التاريخ في الحالة
    setCurrentDate(getCurrentDate());
  }, []);

  return (
    <footer className="active absolute w-full  bg-[#311570] mt-12 text-white">
      <div className="flex w-full justify-center text-xs items-center p-2">
    
        <h1>© {t('footer.footerText')}  &amp; {t('footer.footerLink')}  - {currentDate}</h1>
      </div>
    </footer>
  );
}


export default App;

