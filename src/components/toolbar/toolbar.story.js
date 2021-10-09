/* eslint-disable react/prop-types */
import React from 'react';
import { Toolbar } from '../..';
import CONSTANTS from '../../constants';

export const Default = ({
  arrowless,
  hoverable,
  itemAactive,
  up,
  right,
  boxed,
  ...args
}) => {
  return (
    <Toolbar {...args}>
      <Toolbar.Brand>
        <Toolbar.Item renderAs="a" href="#">
          <img
            src="https://bulma.io/images/bulma-logo.png"
            alt="Bulma: a modern CSS framework based on Flexbox"
            width="112"
            height="28"
          />
        </Toolbar.Item>
        <Toolbar.Burger />
      </Toolbar.Brand>
      <Toolbar.Menu>
        <Toolbar.Container>
          <Toolbar.Item hoverable={hoverable} active={itemAactive} href="#">
            <Toolbar.Link arrowless={arrowless}>First</Toolbar.Link>
            <Toolbar.Dropdown up={up} right={right} boxed={boxed}>
              <Toolbar.Item href="#">Subitem 1</Toolbar.Item>
              <Toolbar.Item href="#">Subitem 2</Toolbar.Item>
              <Toolbar.Divider />
              <Toolbar.Item href="#">After divider</Toolbar.Item>
            </Toolbar.Dropdown>
          </Toolbar.Item>
          <Toolbar.Item href="#">Second</Toolbar.Item>
        </Toolbar.Container>
        <Toolbar.Container align="end">
          <Toolbar.Item href="#">At the end</Toolbar.Item>
        </Toolbar.Container>
      </Toolbar.Menu>
    </Toolbar>
  );
};

Default.argTypes = {
  color: {
    table: {
      category: 'Toolbar',
    },
    control: {
      type: 'select',
      options: Object.values(CONSTANTS.COLORS),
    },
  },
  fixed: {
    table: {
      category: 'Toolbar',
    },
    control: {
      type: 'select',
      options: ['top', 'bottom'],
    },
  },
  active: {
    table: {
      category: 'Toolbar',
    },
    control: {
      type: 'boolean',
    },
  },
  transparent: {
    table: {
      category: 'Toolbar',
    },
    control: {
      type: 'boolean',
    },
  },
  arrowless: {
    table: {
      category: 'Toolbar.Link',
    },
    control: {
      type: 'boolean',
    },
  },
  hoverable: {
    table: {
      category: 'Toolbar.Link',
    },
    control: {
      type: 'boolean',
    },
  },
  itemAactive: {
    name: 'active',
    table: {
      category: 'Toolbar.Link',
    },
    control: {
      type: 'boolean',
    },
  },
  up: {
    table: {
      category: 'Toolbar.Dropdown',
    },
    control: {
      type: 'boolean',
    },
  },
  right: {
    table: {
      category: 'Toolbar.Dropdown',
    },
    control: {
      type: 'boolean',
    },
  },
  boxed: {
    table: {
      category: 'Toolbar.Dropdown',
    },
    control: {
      type: 'boolean',
    },
  },
};
