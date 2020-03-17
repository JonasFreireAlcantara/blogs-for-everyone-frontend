import React from 'react';

import BlogConfiguration from '../../config/BlogConfiguration';

import './styles.css';

const Footer = () => {
  const { author } = BlogConfiguration.footer;

  return (
    <footer>
      <hr />
      <div>
        <p>
          Este blog foi desenvolvido com o apoio da plataforma:{' '}
          <a href='https://github.com/JonasFreireAlcantara/blog-frontend'>
            Blogs for Everyone
          </a>
        </p>
        <p className='strong-copyright'>Copyright &copy; {author}</p>
      </div>
    </footer>
  );
};

export default Footer;
