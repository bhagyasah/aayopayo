
import { createDrawerNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import RegisterNewAccount from '../screens/register-new-account';
import ContactUs from '../screens/contactus/ContactUs';
import MainDrawer from '../screens/drawers/index';
import MainScreen from '../screens';
import TermsAndPrivacy from '../screens/term-and-privacy/TermsAndPrivacy';
import AboutUs from '../screens/aboutus/AboutUs';
import { SCREEN_WIDTH } from '../config';

const stackNavigator = createStackNavigator({
  MainScreen,
  RegisterNewAccount,
  AboutUs,
  ContactUs,
  TermsAndPrivacy,
});

const RootRouter = createDrawerNavigator({
  Home: stackNavigator,
}, {
  contentComponent: MainDrawer,
  drawerWidth: SCREEN_WIDTH * 0.9,
});
export default createAppContainer(RootRouter);
