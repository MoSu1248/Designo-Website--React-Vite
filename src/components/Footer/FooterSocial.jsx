import React from 'react'
import "./footerSocial.scss"
import Facebook from '../../assets/shared/desktop/icon-facebook.svg';
import Youtube from '../../assets/shared/desktop/icon-youtube.svg';
import Twitter from '../../assets/shared/desktop/icon-twitter.svg';
import Pinterest from '../../assets/shared/desktop/icon-pinterest.svg';
import Instagram from '../../assets/shared/desktop/icon-instagram.svg';

export default function FooterSocial() {
  return (
<div className='socialMedia'>
    <ul>
        <li><a href=""><img src={Facebook} alt="" /></a></li>
        <li><a href=""><img src={Youtube} alt="" /></a></li>
        <li><a href=""><img src={Twitter} alt="" /></a></li>
        <li><a href=""><img src={Pinterest} alt="" /></a></li>
        <li><a href=""><img src={Instagram} alt="" /></a></li>
    </ul>
</div>
  )
}
