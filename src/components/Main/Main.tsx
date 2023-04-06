import React from 'react';


import { Container } from './styles';
import { Hero } from '../Hero/Hero';
import { About } from '../About/About';
import { Contact } from '../Contact/Contact';
import { Portfolio } from '../Portfolio/Portfolio';

import boostrapIcon from '../../assets/bootstrap-icon.svg';
import cssIcon from '../../assets/css-icon.svg';
import htmlIcon from '../../assets/html-icon.svg';
import jsIcon from '../../assets/js-icon.svg';
import mysqlIcon from '../../assets/mysql-icon.svg';
import nodeIcon from '../../assets/node-icon.svg';
import reactIcon from '../../assets/react-icon.svg';
import sassIcon from '../../assets/sass-icon.svg';
import typescriptIcon from '../../assets/typescript-icon.svg';
import vscodeIcon from '../../assets/vscode-icon.svg';

export function Main() {
  return (
    <Container>
      
      <Hero></Hero>
      <About></About>
      <Portfolio></Portfolio>
      <Contact></Contact>
    </Container>
  );
}
