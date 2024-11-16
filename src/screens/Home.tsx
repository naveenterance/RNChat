import * as React from 'react';
import {Text} from 'react-native';
import {BottomNavigation} from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ChatListScreen from './ChatList';
import Channels from './Channels';
import SupportChat from './SupportChat';
import Contacts from './Contacts';

type RouteType = {
  key: string;
  title: string;
  icon: string;
};

const SupportChatRoute = () => <SupportChat />;
const ChatListRoute = () => <ChatListScreen />;
const ChannelsRoute = () => <Channels />;
const ContactsRoute = () => <Contacts />;

const HomeTabs: React.FC = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState<RouteType[]>([
    {key: 'supportChat', title: 'SupportChat', icon: 'support-agent'},
    {key: 'chatList', title: 'ChatList', icon: 'chat'},
    {key: 'channels', title: 'Channels', icon: 'groups'},
    {key: 'contacts', title: 'Contacts', icon: 'contacts'},
  ]);

  const renderScene = BottomNavigation.SceneMap({
    supportChat: SupportChatRoute,
    chatList: ChatListRoute,
    channels: ChannelsRoute,
    contacts: ContactsRoute,
  });

  const renderIcon: React.FC<{
    route: RouteType;
    color: string;
  }> = ({route, color}) => (
    <MaterialIcons name={route.icon} size={25} color={color} />
  );

  const renderLabel: React.FC<{
    route: RouteType;
    focused: boolean;
    color: string;
  }> = ({route, focused, color}) => (
    <Text
      style={{
        textAlign: 'center',
        color: focused ? '#5B8E1E' : color,
        fontWeight: '600',
        fontSize: 12,
        marginTop: 2,
      }}>
      {route.title}
    </Text>
  );

  return (
    <BottomNavigation<RouteType>
      navigationState={{index, routes}}
      onIndexChange={setIndex}
      renderScene={renderScene}
      renderIcon={renderIcon}
      renderLabel={renderLabel}
      activeColor="#5B8E1E"
      inactiveColor="gray"
      barStyle={{backgroundColor: '#fff', height: 'auto'}}
    />
  );
};

export default HomeTabs;
