import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Navigation.scss';
import blocJamsLogo from '../../assets/images/bloc_jams_logo.png';

const Navigation = ({ items }) => {
  const navigationLinks = items.map((item) => (
    <Link
      key={item.name}
      className="main-header__navigation__links"
      to={`/${item.url}`}
      role="link"
    >
      {item.name}
    </Link>
  ));

  return (
    <header className="main-header">
      <nav className="main-header__navigation">
        <img
          className="main-header__brand-logo"
          src={blocJamsLogo}
          alt={blocJamsLogo}
        />
        {navigationLinks}
      </nav>
    </header>
  );
};

Navigation.propTypes = {
  items: PropTypes.array,
};

export default Navigation;
