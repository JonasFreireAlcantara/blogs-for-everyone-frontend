import React from 'react';

import './styles.css';

import Header from '../../components/header';
import LastPosts from '../../components/last-posts';
import Footer from '../../components/footer';

import BlogConfiguration from '../../config/BlogConfiguration';

const About = () => {
  global.document.title = 'Sobre';

  const { title, paragraphs, image } = BlogConfiguration.about;

  return (
    <div id='about'>
      <Header />

      <main>
        <LastPosts />

        <article id='about-content'>
          <div>
            <strong>{title}</strong>

            {paragraphs.map(paragraph => (
              <p key={paragraph}>{paragraph}</p>
            ))}

            <img src={image} alt='Sobre nós' />
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default About;
