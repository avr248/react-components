import React from 'react';
import classnames from 'classnames';

import Element from '../../element';

const ToolbarBrand = ({ className, children, ...props }) => {
  return (
    <Element {...props} className={classnames('toolbar-brand', className)}>
      {children}
    </Element>
  );
};

ToolbarBrand.propTypes = {};

ToolbarBrand.defaultProps = {};

export default ToolbarBrand;
