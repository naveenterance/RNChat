import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import SettingsScreen from './Settings';
import ChatListScreen from './ChatList';
import Channels from './Channels';
import SupportChat from './SupportChat';
import Contacts from './Contacts';

const Tab = createBottomTabNavigator();
11;

const HomeTabs = () => {
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
        tabBarActiveTintColor: '#5B8E1E',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          height: '8%',
        },

        tabBarLabel: ({focused, color}) => (
          <Text style={{color: focused ? '#5B8E1E' : color, fontWeight: '600'}}>
            {route.name}
          </Text>
        ),
      })}>
      <Tab.Screen
        name="SupportChat"
        component={SupportChat}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="ChatList"
        component={ChatListScreen}
        options={{headerShown: false}}
      />

      <Tab.Screen
        name="Channels"
        component={Channels}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Contacts"
        component={Contacts}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

export default HomeTabs;
