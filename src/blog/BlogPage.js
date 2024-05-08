import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { IconBrandGithub, IconEye } from '@tabler/icons-react';

const posts = [
  { name: 'post', titleKey: 'blog.react-app.title', contentKey: 'blog.react-app.content' },
  { name: 'flutter', titleKey: 'blog.flutter-app.title', contentKey: 'blog.flutter-app.content' },
];

function Bloges({ textDirection }) {
  const { t, i18n } = useTranslation();

  return (
    <div className={`pt-10 my-10 ${textDirection}`} id="home" style={{ direction: i18n.language === 'ar' ? 'rtl' : 'ltr' }}>
      <h2 className="text-xl mb-6">{t('header.navBlog')}</h2>
      <ul className="space-y-6">
        {posts.map((post) => (
          <li key={post.name} className="bg-whit blog_list shadow-md rounded p-6 transition-transform transform hover:scale-105">
            <Link to={`${post.name}`} className="block text-blue-500 font-bold text-xs mb-4">
              {t(post.titleKey)}
            </Link>
            <p className="text-gray-700 text-xs">{t(post.contentKey).substring(0, 100)}...</p>
            <div className="flex justify-between mt-4">
              <Link to={`${post.name}`} className="text-blue-500 mr-4 hover:underline">
                <IconEye className="mr-2" style={{ direction: 'ltr' }} />
              </Link>
              <a
                href={`https://altyeb22.github.io/${post.name}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-700"
              >
                <IconBrandGithub className="mr-2" style={{ direction: 'ltr' }} />
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Bloges;
