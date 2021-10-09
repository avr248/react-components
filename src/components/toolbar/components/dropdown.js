import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Element from '../../element';

const ToolbarDropdown = ({ className, boxed, right, children, ...props }) => {
  return (
    <Element
      {...props}
      className={classnames('toolbar-dropdown', className, {
        'is-boxed': boxed,
        'is-right': right,
      })}
    >
      {children}
    </Element>
  );
};

ToolbarDropdown.propTypes = {
  boxed: PropTypes.bool,
  /**
   * If your parent `Toolbar.Container` is on the right side, you can align the dropdown to start from the right setting this to true.
   */
  right: PropTypes.bool,
  /**
   * Open the dropdown upward instead of downward (default behaviour)
   */
  up: PropTypes.bool,
  renderAs: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
    PropTypes.object,
  ]),
};

ToolbarDropdown.defaultProps = {
  renderAs: 'span',
};

export default ToolbarDropdown;
