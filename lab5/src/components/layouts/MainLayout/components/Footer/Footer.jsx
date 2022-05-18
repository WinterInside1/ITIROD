import React from 'react';
import logoFooterImage from '../../../../../assets/images/logo-footer.png';
import phoneIcon from '../../../../../assets/icons/phone.svg';
import mailIcon from '../../../../../assets/icons/mail.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <img
          src={logoFooterImage}
          className="footer__logo"
          alt="logo-footer"
        />
        <div className="footer__socials">
          <a href="#instagram">INSTAGRAM</a>
          <a href="#telegram">TELEGRAM</a>
          <a href="#facebook">FACEBOOK</a>
        </div>
        <div className="footer__content">
          <div className="footer__block">
            <div className="d-flex mb-3">
              <div className="w-50">
                <a href="/">ГЛАВНАЯ</a>
              </div>
              <div className="w-50">
                <a href="/">ПРЕПОДВАВАТЕЛИ</a>
              </div>
            </div>
            <div className="d-flex">
              <div className="w-50">
                <a href="/">ОТЗЫВЫ</a>
              </div>
              <div className="w-50">
                <a href="/">ПРЕДМЕТЫ</a>
              </div>
            </div>
          </div>
          <div className="footer__block">
            <a className="d-block text-center mb-3" href="/">
              О НАС
            </a>
            <a className="d-block text-center" href="/">
              ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ
            </a>
          </div>
          <div className="footer__block">
            <div className="d-flex mb-3">
              <div className="w-50">
                <a href="/">ТЕЛЕФОН ПОДДЕРЖКИ:</a>
              </div>
              <div className="w-50">
                <a className="d-flex align-items-center" href="/">
                  <img
                    alt="phone"
                    width="15"
                    height="15"
                    src={phoneIcon}
                    className="mr-2"
                  />
                  +375 (29) 413-61-43
                </a>
              </div>
            </div>
            <div className="d-flex">
              <div className="w-50">
                <a href="/">УЛ. СЧАСТЬЯ 17</a>
              </div>
              <div className="w-50">
                <a className="d-flex align-items-center" href="/">
                  <img
                    width="15"
                    alt="mail"
                    height="15"
                    src={mailIcon}
                    className="mr-2"
                  />
                  Test@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
