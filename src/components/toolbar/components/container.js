import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Element from '../../element';

const alignMapper = {
  left: 'start',
  right: 'end',
};

const ToolbarContainer = ({ className, children, align, ...props }) => {
  return (
    <Element
      {...props}
      className={classnames(
        {
          [`toolbar-${alignMapper[align]}`]: alignMapper[align],
        },
        className,
      )}
    >
      {children}
    </Element>
  );
};

ToolbarContainer.propTypes = {
  align: PropTypes.oneOf(['left', 'right']),
};

ToolbarContainer.defaultProps = {
  align: 'left',
};

export default ToolbarContainer;
