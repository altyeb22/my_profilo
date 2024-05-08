import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

function Skills({ textDirection }) {
  const { t } = useTranslation();

  const [activeCategory, setActiveCategory] = useState('All');
 
  const skillsData = [
    { category: 'All', name: 'HTML', icon: 'html.svg' },
    { category: 'Frontend', name: 'CSS', icon: 'css-svgrepo-com.svg' },
    { category: 'Frontend', name: 'javascript', icon: 'js.svg' },
    { category: 'Frontend', name: 'Vite', icon: 'vite.svg' },
    { category: 'Frontend', name: 'React', icon: 'react.svg' },
    { category: 'Frontend', name: 'Tailwindcss', icon: 'tailwind.svg' },
    { category: 'Frontend', name: 'Bootsrap', icon: 'bootstrap.svg' },
    { category: 'Frontend', name: 'Vue', icon: 'vue.svg' },
    { category: 'Backend', name: 'php', icon: 'php.svg' },
    { category: 'Backend', name: 'node', icon: 'node.svg' },
    { category: 'Backend', name: 'mysql', icon: 'mysql.svg' },
    { category: 'Backend', name: 'laravel', icon: 'laravel.svg' },
    // { category: 'Backend', name: 'Github', icon: 'github.svg' },
    { category: 'Backend', name: 'Git', icon: 'git.svg' },
   
    { category: 'UI/UX', name: 'Adobe-li', icon: 'adobe-lightroom.svg '},
    { category: 'UI/UX', name: 'AdobeXd', icon: 'adobe-xd.svg' },
    { category: 'UI/UX', name: 'Figma', icon: 'figma.svg' },


  ];

  const filteredSkills = activeCategory === 'All' ? skillsData : skillsData.filter(skill => skill.category === activeCategory);

  return (
    <div className="my-skills mt-14 pt-32 pb-3 mb-24" id="my-skills">
      <h1 className="font-bold text-center text-xl p-2 font-F_Light mb-6">{t('skills.skills')}</h1>

      <ul className="category2 flex gap-6 p-2 my-3 justify-center items-center">
        {['All', 'Frontend','Backend', 'UI/UX'].map(category => (
          <li
            key={category}
            className={`small cursor-pointer  ${activeCategory === category ? 'active2' : ''}`}
            onClick={() => setActiveCategory(category)}
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-easing="ease-in-out"
          >
            {category}
          </li>
        ))}
      </ul>
      <div className="flex md:flex-wrap flex-wrap justify-center lg:pb-8 gap-3 lg:justify-around">
        {filteredSkills.map((skill, index) => (
          <div
            key={index}
            className={`box ${index % 2 === 0 ? 'one' : 'two'} ${skill.category.toLowerCase()}
             cursor-pointer  flex flex-col p-2 justify-start gap-4
            items-center w-24 h-28 shadow bg-[--primary-color] rounded-md all aos-init`}
            data-aos="fade-up"
            data-aos-duration={`${500 + index * 200}`}
            data-aos-easing="ease"
          >
            <img className=' w-3/5 ' src={`images/${skill.icon}`} alt={skill.name} />
            <h2 className='font-bold '>{skill.name}</h2>
          </div>
        ))}
      </div>

     
    </div>
  );
};

export default Skills;
