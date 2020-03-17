import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';
import BlogConfiguration from '../../config/BlogConfiguration';

import './styles.css';

import AccordionMenuLinks from '../accordion-menu-links';

class Header extends Component {
  constructor() {
    super();
    const { title, logo } = BlogConfiguration.header;
    this.state = {
      title,
      logo
    };
  }

  async componentDidMount() {
    const categories = await (await api.get('/categories')).data;

    let links = [];

    if (categories) {
      links = categories.map(category => ({
        title: category.name,
        url: `/category/${category.url}`
      }));
    }

    this.setState({ links });
  }

  render() {
    const links = this.state.links || [];
    const { title, logo } = this.state;

    return (
      <header>
        <div className='header-content'>
          <img className='blog-logo' alt={title} src={logo} />

          <div className='blog-title'>
            <Link className='title' to='/'>
              {title}
            </Link>

            <nav>
              <AccordionMenuLinks
                className='header-navigation-button'
                title='Home'
                url='/'
              />
              <AccordionMenuLinks
                className='header-navigation-button'
                title='Sobre'
                url='/about'
              />
              <AccordionMenuLinks
                className='header-navigation-button'
                title='Categorias'
                links={links}
              />
            </nav>
          </div>
        </div>

        <hr />
      </header>
    );
  }
}

export default Header;
