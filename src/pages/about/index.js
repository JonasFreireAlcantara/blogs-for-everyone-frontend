import React from 'react';

import './styles.css';

import Header from '../../components/header';
import LastPosts from '../../components/last-posts';
import Footer from '../../components/footer';

import ReactLogo from '../../assets/react-logo.png';

const About = () => {
  global.document.title = 'Sobre';

  return (
    <div id="about">
      <Header />

      <main>
        <LastPosts />

        <article id="about-content">
          <strong>Sobre o Espaço da Tecnologia</strong>
          <p>
            Fusce rhoncus, purus non scelerisque luctus, est leo sollicitudin
            purus, a fringilla tellus ligula vel lectus. Vestibulum et egestas
            felis. Aliquam ut luctus magna, id ultrices mi. Integer ut euismod
            arcu. Vivamus apibus imperdiet neque at pretium. Nulla quis
            imperdiet ex. Nulla facilisi. Quisque auctor, metus sit amet sodales
            eleifend, velit nunc interdum neque, vitae gravida mi diam id nunc.
            Cras in nibh nec quam semper rutrum euismod at leo. Proin facilisis
            orci nec sagittis facilisis. Quisque ut consectetur sapien. Donec
            sed faucibus nulla.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit
            amet elit sodales dolor faucibus facilisis. Nullam ut urna nec dui
            ultrices gravida. Phasellus eget metus at orci volutpat finibus non
            interdum nulla. Mauris quis pretium turpis. Donec at lacus aliquet,
            porttitor urna ac, condimentum tellus. Sed quis auris eget odio
            gravida varius sed eget velit. Praesent gravida metus accumsan nibh
            dignissim, consectetur commodo nibh rhoncus. Sed efficitur mi vel
            purus cidunt, id sagittis magna molestie. Duis pellentesque at velit
            aliquet mattis. Morbi varius massa nibh, congue feugiat diam semper
            id. Nulla id nunc non massa cursus faucibus eget sed mi. Vivamus
            tempor nisl arcu, vitae pharetra nulla facilisis quis
          </p>
          <img src={ReactLogo} alt="Sobre nós" />
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default About;
