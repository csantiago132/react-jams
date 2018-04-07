import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navigation = (props) => {
  const { items } = props;
  const navigationLinks = items.map((item) => (
    <Link
      key={item.name}
      className="navigation__list__items"
      to={`/${item.url}`}
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
