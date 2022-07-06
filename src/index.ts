import { createElement } from 'react';
import { createRoot } from 'react-dom/client';
import App from '@/pages/app';

const root = document.getElementById('root');
const instance = createElement(App);

if(root) {
  createRoot(root).render(instance);
}