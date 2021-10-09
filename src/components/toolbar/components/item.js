import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import ToolbarDropdown from './dropdown';

import Element from '../../element';

const ToolbarItem = ({
  className,
  active,
  children,
  hoverable,
  renderAs,
  arrowless,
  ...props
}) => {
  let as = renderAs;

  const dropdown = React.Children.toArray(children).find((child) => {
    return child.type === ToolbarDropdown;
  });

  if (dropdown && renderAs === 'a') {
    as = 'span';
  }
  return (
    <Element
      {...props}
      renderAs={as}
      className={classnames('toolbar-item', className, {
        'is-active': active,
        'has-dropdown': dropdown,
        'is-hoverable': hoverable,
        'has-dropdown-up': dropdown && dropdown.props?.up,
        'is-arrowless': arrowless,
      })}
    >
      {children}
    </Element>
  );
};

ToolbarItem.propTypes = {
  /**
   * If the item has a dropdown, control if the dropdown is displayed
   */
  active: PropTypes.bool,
  /**
   * Control if the dropdown should be displayed on mouse over
   * This prop will be ignored if `active=true`
   */
  hoverable: PropTypes.bool,
  arrowless: PropTypes.bool,
  renderAs: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
    PropTypes.object,
  ]),
};

ToolbarItem.defaultProps = {
  renderAs: 'a',
};

export default ToolbarItem;
