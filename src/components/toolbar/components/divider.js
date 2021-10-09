import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Element from '../../element';

const ToolbarDivider = ({ className, ...props }) => {
  return (
    <Element {...props} className={classnames('toolbar-divider', className)} />
  );
};

ToolbarDivider.propTypes = {
  renderAs: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
    PropTypes.object,
  ]),
};

ToolbarDivider.defaultProps = {
  renderAs: 'hr',
};

export default ToolbarDivider;
