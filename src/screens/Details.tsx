import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import SettingsScreen from './Settings';
import ChatScreen from './Chat';

// Create a Bottom Tab Navigator
const Tab = createBottomTabNavigator();

const DetailsTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Chat"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline';
          } else if (route.name === 'Chat') {
            iconName = focused ? 'chatbubble-sharp' : 'chatbubble-outline';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          paddingBottom: 10,
        },

        tabBarLabel: ({focused, color}) => (
          <Text style={{color: focused ? 'tomato' : color}}>{route.name}</Text>
        ),
      })}>
      <Tab.Screen
        name="Chat"
        component={ChatScreen}
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