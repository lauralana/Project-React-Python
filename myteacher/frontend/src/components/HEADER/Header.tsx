import React from 'react';
import { HeaderContainer, Logo } from './header.style';

 const Header = () => {
  return (
   <HeaderContainer> 
    <div>
      <Logo src="/images/myteacher.png"/>
    </div> 
    <p> Encontre o professor ideal! </p>
    </HeaderContainer>
  )
}

export default Header;