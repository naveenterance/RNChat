import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import SettingsScreen from './Settings';
import ChatListScreen from './ChatList';

// Create a Bottom Tab Navigator
const Tab = createBottomTabNavigator();

const DetailsTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="ChatList"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline';
          } else if (route.name === 'ChatList') {
            iconName = focused ? 'chatbubble-sharp' : 'chatbubble-outline';
          }

          return <Icon name={iconName!} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'teal',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          height: '8%',
        },

        tabBarLabel: ({focused, color}) => (
          <Text style={{color: focused ? 'teal' : color}}>{route.name}</Text>
        ),
      })}>
      <Tab.Screen
        name="ChatList"
        component={ChatListScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

export default DetailsTabs;
