import React from 'react';
// import ReactDOM from 'react-dom'; //구버전
import { createRoot } from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import App from './App';
import GlobalStyled from './styles/Globalstyled';
import { BrowserRouter } from 'react-router-dom';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <RecoilRoot>
    <BrowserRouter>
      <GlobalStyled />
      <App />
    </BrowserRouter>
  </RecoilRoot>,
);
