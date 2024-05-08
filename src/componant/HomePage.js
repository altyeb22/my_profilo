// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import HomePage from './componant/landing';
import BlogPage from './componant/blog/BlogPage';
// import Hom from './componant/HomePage';
import Header from './componant/header';
import ReactTutorial from './componant/post';
import HomePage from './componant/landing';

const App = () => {
  return (
    <Router>
      <div>
        <Header/>

   
        <Routes>
          {/* تحديد الصفحة الرئيسية أولاً */}
          <Route path="/react" element={<HomePage />} />

          {/* ثم تحديد باقي الصفحات */}
          <Route path="/blog" element={<BlogPage />} />
          {/* <Route path="/" element={<Hom />} /> */}
          <Route path="/post" element={<ReactTutorial />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
