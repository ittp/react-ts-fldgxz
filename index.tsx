import * as React from 'react';
import { useState } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
let layoutConfig = [{ id: 1 }, { id: 5 }];

let csv = require('csv');

root.render(
  <>
    <App title={'Users'} data={layoutConfig} />
  </>
);
