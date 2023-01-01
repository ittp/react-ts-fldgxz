import * as React from 'react';
import {
  MainNav,
  NavSection,
  NavSections,
  NavCondense,
  NavBrand,
  NavUser,
  NavLink,
} from '@strapi/design-system';

export default function App({ title, data }) {
  let content;

  if (data) {
    content = data.map((item, key) => {
      return (
        <div {...item.config} {...key}>
          {item.content}
        </div>
      );
    });
  }
  return (
    <div>
      <h1>{title}</h1>

      {content}
    </div>
  );
}
