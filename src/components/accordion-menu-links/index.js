import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './styles.css';

const AccordionMenuLinks = props => {
  const { title, url, links } = props;

  return (
    <>
      {url && (
        <Link
          className={`${props.className} accordion-menu-links-wrapper`}
          to={url}
        >
          {title}
        </Link>
      )}

      {!url && (
        <div className={`${props.className} accordion-menu-links-wrapper`}>
          <strong>{title}</strong>
          <div className='accordion-menu-links-list'>
            {links.map(link => (
              <div key={link.url}>
                <Link className='accordion-menu-links-element' to={link.url}>
                  {link.title}
                </Link>
                <hr />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

AccordionMenuLinks.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  url: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  links: PropTypes.array
};

AccordionMenuLinks.defaultProps = {
  className: '',
  url: '',
  links: []
};

export default AccordionMenuLinks;
