
    window.reactComponents = {};

    window.vueComponents = {};

  
      import React from "react";

      import ReactDOM from "react-dom";


      import ReactWrapper from '../node_modules/better-docs/lib/react-wrapper.js';

      window.React = React;

      window.ReactDOM = ReactDOM;

      window.ReactWrapper = ReactWrapper;

    
    import './styles/reset.css';

    import './styles/iframe.css';

  
      import _CustomWrapper from '../src/JsDoc/JsDoc.js';

      window._CustomWrapper = _CustomWrapper;

      import Component0 from '../src/Components/Categories/index.js';
reactComponents['Categories'] = Component0;

import Component1 from '../src/Components/Header/index.js';
reactComponents['Header'] = Component1;

import Component2 from '../src/Components/MenuHorizontal/index.js';
reactComponents['MenuHorizontal'] = Component2;

import Component3 from '../src/Components/MenuVertical/index.js';
reactComponents['MenuVertical'] = Component3;

import Component4 from '../src/Components/Picto/Picto.js';
reactComponents['Picto'] = Component4;