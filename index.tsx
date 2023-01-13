import * as React from 'react';
import { useState } from 'react';
import { createRoot } from 'react-dom/client';
import path from 'path';
import axios from 'axios';

import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

const Converter = require('csvtojson').Converter;

root.render(
  <div>
    <a href="1">1</a>
    <App title={'Convert'} />
  </div>
);
