import React from 'react';
import Search from '../Search/index';
import CartMobile from '../Cart-Mobile.js';
import './style.css';


const Header = (props) => {
  const colorThemeHeader = props.colorThemeHeader;
  const logoType = props.logoType;
  const redirectLogoType = props.redirectLogoType;
  const tradeIcon = props.tradeIcon;
  const redirectToTheme = props.redirectToTheme;


  return (
    <div>
      <header className="header-default" style={{ background: colorThemeHeader }}>
        <div className="header-container">
          <a className="logo-pokestore-redirect" href={redirectLogoType}>
            <img className="logo-pokestore" src={logoType} alt="Logotipo da PokeStore" />
          </a>
          <Search className="search-input-component" />
          <a className="trade-button" href={redirectToTheme}>
            Troque<img alt="Botao de troca de tema" className="trade-icon" src={tradeIcon} />Tipo
          </a>
        </div>
      </header>

      <CartMobile colorThemeCartMobile={colorThemeHeader} />
    </div>
  );
};

export default Header;