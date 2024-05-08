import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
// import { IconBrandGithub } from '@tabler/icons-react';

const MyWorks = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState('All');

  const worksData = [
    {
      category: 'All',
      title: 'landing pages metaverse Web ',
      technologies: 'HTML  & ReactJs & Figma',
      imageSrc: 'images/landing pages metaverse Web .png',
      githubLink: 'https://www.figma.com/file/osX9hibXwqh830slUz04LS/landing-pages-metaverse-ui?type=design&node-id=2%3A815&mode=design&t=ztXlWFtYABo0cLOL-1',
    },
    {
      category: 'All',
      title: 'Fashion Website UI Template',
      technologies: 'Figma',
      imageSrc: 'images/Frame 76.png',
      githubLink: 'https://www.figma.com/file/xzu1ECrgCLimASD0vqNfao/Fashion-Website-UI-Template-(Community)?type=design&node-id=219%3A72&mode=design&t=83xN2qC5bR3pOkbB-1',
    },
    {
      category: 'All',
      title: 'Food App Ui',
      technologies: 'Figma',
      imageSrc: 'images/app.png',
      githubLink: 'https://www.figma.com/file/TDWn2sgzmTOdent67Al9hT/Food-App-Ui?type=design&node-id=1%3A5&mode=design&t=BNauCTvllMt47Sk8-1',
     },
    
    {
      category: 'UI/UX',
      title: 'web design - Figma',
      technologies: 'Figma',
      imageSrc: 'images/figma1.png',
      githubLink: 'https://github.com/altyeb22',
    },
    {
      category: 'UI/UX',
      title: 'profile devleoper',
      technologies: 'Figma',
      imageSrc: 'images/profilio.png',
      githubLink: 'https://www.figma.com/file/NtvNVzsOOCibE1AejuhfV6/profile-devleoper?type=design&node-id=0%3A1&mode=design&t=CZkCkFKIitOgNYsw-1',
    },

    {
      category: 'UI/UX',
      title: 'landing page website',
      technologies: 'Figma',
      imageSrc: 'images/landing page website.png',
      githubLink: 'https://www.figma.com/file/PHmgE4SDDEllwfMcXglNue/landing-page-website-(Community)?type=design&node-id=1%3A2&mode=design&t=lKzc5Pj2zWQZI5Ko-1',
    },

    {
      category: 'UI/UX',
      title: 'web design - Figma',
      technologies: 'Figma',
      imageSrc: 'images/figma3.png',
      githubLink: 'https://github.com/altyeb22',
    },

    {
      category: 'UI/UX',
      title: 'web design - Figma',
      technologies: 'Figma',
      imageSrc: 'images/figma4.png',
      githubLink: 'https://github.com/altyeb22',
    },

    {
      category: 'Frontend',
      title: 'Responsive Web Design',
      technologies: ' HTML& CSS &Js % tailwindcss',
      imageSrc: 'images/frontend1.jpg',
      githubLink: 'https://github.com/altyeb22',
    },

    {
      category: 'Frontend',
      title: 'Responsive Web Design',
      technologies: ' HTML& CSS &Js',
      imageSrc: 'images/frontend3.png',
      githubLink: 'https://github.com/altyeb22',
    },
    {
      category: 'Frontend',
      title: 'Responsive Web Design',
      technologies: ' HTML& CSS &Js',
      imageSrc: 'images/frontend5.png',
      githubLink: 'https://github.com/altyeb22',
    },
    {
      category: 'Frontend',
      title: 'Responsive Web Design',
      technologies: ' HTML& CSS &Js',
      imageSrc: 'images/frontend6.png',
      githubLink: 'https://github.com/altyeb22',
    },

    {
      category: 'Frontend',
      title: 'Responsive Web Design',
      technologies: ' HTML& CSS &Js',
      imageSrc: 'images/frontend8.png',
      githubLink: 'https://github.com/altyeb22',
    },
     {
      category: 'Backend',
      title: 'ecommerce website',
      technologies: 'HTML & php & mysql& ReactJs',
      imageSrc: 'images/mockup1.png',
      githubLink: 'https://github.com/altyeb22',
    },
    {
      category: 'Backend',
      title: 'ecommerce website',
      technologies: 'HTML & php & mysql& ReactJs',
      imageSrc: 'images/backend2.png',
      githubLink: 'https://github.com/altyeb22',
    },
   
  ];

  const filteredWorks = activeCategory === 'All' ? worksData : worksData.filter(work => work.category === activeCategory);
  const categories = ['All', 'Frontend', 'Backend', 'UI/UX'];

  return (
    <div>
      <div className="my-works mt-20 pt-36 pb-3 mb-12 h-auto" id="my-works">
        <h3 className=" text-center text-xl font-F_Light p-2  my-3">{t('myWorks.portfolio')}</h3>

        <ul className="category flex gap-6 p-2 my-3 justify-center items-center">
        {categories.map(category => (
  <li
    key={category}
    className={`small ${activeCategory === category ? 'active' : ''}`}
    onClick={() => setActiveCategory(category)}
  >
   {category}
  </li>
))}

        </ul>

        <div className="flex items-center justify-center flex-wrap md:items-center md:gap-5 overflow-hidden">
          {filteredWorks.map((work, index) => (
            <div
              key={index}
              className={`templet ${index % 2 === 0 ? 'one' : 'two'} ${work.category.toLowerCase()} rounded-xl all w-[17rem] h-[21.2rem] lg:w-[21.2rem] sm:max-w-sm overflow-hidden bg-[#0C0834] m-2 flex flex-col gap-4  shadow-md`}
              data-aos="fade-left"
              data-aos-duration={`${1200 + index * 100}`}
              data-aos-easing="ease"
            >
              <div className="list_row flex items-center w-full h-48  justify-center px-2 py-2">
              <img
                src={work.imageSrc}
                className="rounded-t-md transition  h-full object-cover small"
                alt=""
              />
              </div>

              <div className="list_work px-3 py-3 text-white">
                <h1 className="small ">{work.title}</h1>
                <h2 className="small text-xs">{work.technologies}</h2>
                <div className="list_row flex items-center justify-between mt-3">
                  <a
                    href={work.githubLink}
                    className="view px-3 py-1 bg-[--blue-color] rounded-md small text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t('myWorks.view')}
                  </a>

                  {/* <a href={work.githubLink} title="source code">
                    <IconBrandGithub />
                  </a> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyWorks;