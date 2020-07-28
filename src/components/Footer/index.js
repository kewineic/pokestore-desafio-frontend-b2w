import React from 'react';
import './style.css';

const Footer = (props) => {
  const colorThemeFooter = props.colorThemeFooter;

  return (
    <div className="footer-default" style={{ background: colorThemeFooter }}>
      <div className="footer-container">

        <p><a target="_blank" rel="noopener noreferrer" href="https://github.com/kewineic">&copy; Kewin Costa</a> - <a target="_blank" rel="noopener noreferrer" href="https://b2w.gupy.io/">Desafio Loja Pokemon by B2W</a></p>

      </div>
    </div>
  )
}

export default Footer;