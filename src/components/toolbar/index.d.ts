import { BulmaComponent } from '..';
import { Color } from '..';

interface ToolbarProps {
  transparent?: boolean;
  fixed?: 'top' | 'bottom';
  size?: 'large';
  color?: Color;
  active?: boolean;
}

interface ToolbarBurgerProps {
  onClick?: () => void;
}

interface ToolbarItemProps {
  active?: boolean;
  hoverable?: boolean;
}

interface ToolbarDropdownProps {
  boxed?: boolean;
  right?: boolean;
  up?: boolean;
}

interface ToolbarLinkProps {
  arrowless?: boolean;
}

interface ToolbarContainerProps {
  align?: 'left' | 'right';
}

declare const Toolbar: BulmaComponent<ToolbarProps, 'nav'> & {
  Brand: BulmaComponent<{}, 'div'>;
  Burger: BulmaComponent<ToolbarBurgerProps, 'div'>;
  Menu: BulmaComponent<{}, 'div'>;
  Item: BulmaComponent<ToolbarItemProps, 'a'>;
  Dropdown: BulmaComponent<ToolbarDropdownProps, 'span'>;
  Link: BulmaComponent<ToolbarLinkProps, 'span'>;
  Divider: BulmaComponent<{}, 'div'>;
  Container: BulmaComponent<ToolbarContainerProps, 'div'>;
};

export default Toolbar;
