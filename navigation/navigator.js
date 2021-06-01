import {createStackNavigator, createAppContainer} from 'react-navigation'
import{createBottomTabNavigator} from 'react-navigation-tabs'


import SearchScreen from '../screens/search'
import GroupScreen from '../screens/groups'
import MessageScreen from '../screens/messages'
import ProfileScreen from '../screens/profile'


const tabNav= createBottomTabNavigator({
  Group:{
    screen:GroupScreen
  },
  Search: {
    screen:SearchScreen
  },
  Message:{
    screen: MessageScreen
  },
  Profile:{
    screen:ProfileScreen
  }

});

export default createAppContainer(tabNav);