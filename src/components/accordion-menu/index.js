import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

const AccordionMenu = props => {
  const { title, url, links } = props;

  return (
    <>
      {url && (
        <Link className={`${props.className} accordion-menu-wrapper`} to={url}>
          {title}
        </Link>
      )}

      {!url && (
        <div className={`${props.className} accordion-menu-wrapper`}>
          <strong>{title}</strong>
          <div className="accordion-menu-list">
            {links.map(link => (
              <div key={link.url}>
                <Link
                  className="accordion-menu-element"
                  to={link.url}
                >
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

export default AccordionMenu;
