import React from 'react';
import ReactDOM from 'react-dom';
import ButtonCounter from './components/ButtonCounter';
import ClickityClick from './components/ClickityClick';
import LightSwitch from './components/LightSwitch';

ReactDOM.render(
  <div>
    <ClickityClick />
    <ButtonCounter />
    <LightSwitch />
  </div>,
  document.getElementById('root')
);
