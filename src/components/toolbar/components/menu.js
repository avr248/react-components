import React from 'react';
import classnames from 'classnames';

import { ShowContext } from '../context';

import Element from '../../element';

const ToolbarMenu = ({ className, children, ...props }) => {
  return (
    <ShowContext.Consumer>
      {(active) => {
        return (
          <Element
            {...props}
            className={classnames('toolbar-menu', className, {
              'is-active': active,
            })}
          >
            {children}
          </Element>
        );
      }}
    </ShowContext.Consumer>
  );
};

ToolbarMenu.propTypes = {};

ToolbarMenu.defaultProps = {};

export default ToolbarMenu;
