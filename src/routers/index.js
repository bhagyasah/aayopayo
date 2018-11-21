
import { createDrawerNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import RegisterNewAccount from '../screens/RegisterNewAccount';
import ContactUs from '../screens/ContactUs';
import MainDrawer from '../screens/drawers/index';
import MainScreen from '../screens';
import AboutUs from '../screens/AboutUs';
import {SCREEN_WIDTH } from '../config';

const stackNavigator = createStackNavigator({
  MainScreen,
  RegisterNewAccount,
  AboutUs,
  ContactUs,
});

const RootRouter = createDrawerNavigator({
  Main: stackNavigator,
}, {
  contentComponent: MainDrawer,
  drawerWidth: SCREEN_WIDTH * 0.9,
});
export default createAppContainer(RootRouter);
