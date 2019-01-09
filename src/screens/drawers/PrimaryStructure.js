import { APP_LOGO } from '../../config';

export const header = { iconLeft: 'close', title: 'Menu', logo: APP_LOGO };

export const contents = (status) => {
  // console.log('status in contents', status);

  return [
    { element: 'separator', label: 'Settings' },
    {
      element: 'touchable', iconLeft: 'person', label: 'My Account', iconRight: 'arrow-forward',
    },
    { element: 'separator', label: 'Help & Supports' },
    {
      element: 'touchable', iconLeft: 'help', label: 'About Us', iconRight: 'arrow-forward',
    },
    {
      element: 'touchable', iconLeft: 'call', label: 'Contact Us', iconRight: 'arrow-forward',
    },
    {
      element: 'touchable', iconLeft: 'document', label: 'Terms And Privacy', iconRight: 'arrow-forward',
    },
    {
      element: 'touchable', iconLeft: status ? 'log-out' : 'log-in', label: status ? 'Sign Out' : 'Sign In', iconRight: 'arrow-forward',
    },
  ];
};
export const footer = { footerNote: 'Our mission is make specialized Vedic astrology to all people in a convennient effective reliable and affordable way' };
