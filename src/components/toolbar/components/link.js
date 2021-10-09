import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Element from '../../element';

const ToolbarLink = ({ className, children, arrowless, ...props }) => {
  return (
    <Element
      {...props}
      className={classnames('toolbar-link', className, {
        'is-arrowless': arrowless,
      })}
    >
      {children}
    </Element>
  );
};

ToolbarLink.propTypes = {
  arrowless: PropTypes.bool,
  renderAs: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
    PropTypes.object,
  ]),
};

ToolbarLink.defaultProps = {
  renderAs: 'span',
};

export default ToolbarLink;
