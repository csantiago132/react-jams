import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navigation = (props) => {
  const navigationLinks = props.items.map((item) => (
    <Link
      className="navigation__list__items"
      to={`/${item.url}`}
      key={item.name}
      role="link"
    >
      {item.name}
    </Link>
  ));

  return <nav>{navigationLinks}</nav>;
};

Navigation.propTypes = {
  items: PropTypes.array,
};

export default Navigation;
