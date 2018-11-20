
import { createDrawerNavigator, createBottomTabNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import Live from '../screens/tab/Live';
import Closed from '../screens/tab/Closed';
import Upcoming from '../screens/tab/Upcoming';
import RegisterNewAccount from '../screens/RegisterNewAccount';
import ContactUs from '../screens/ContactUs';
import MainDrawer from '../screens/drawer/index';
import AboutUs from '../screens/AboutUs';

const RootRouter = createDrawerNavigator({
  Main: createStackNavigator({
    Main: createBottomTabNavigator({
      Live,
      Upcoming,
      Closed,
    }),
    RegisterNewAccount,
    ContactUs,
    AboutUs,
  }),
  RegisterNewAccount,
  ContactUs,
  AboutUs,
});
export default createAppContainer(RootRouter);
