import * as React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {FlashList} from '@shopify/flash-list';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AdditionalMenu from './components/AdditionalMenu';

const ChatListScreen = () => {
  const chatData = [
    {
      id: '1',
      name: 'John Doe',
      message: 'What does this do?',
      time: '10:00pm',
      avatar: 'https://picsum.photos/200/300',
    },
    {
      id: '2',
      name: 'Jane Smith',
      message: 'This is a sample message.',
      time: '10:05pm',
      avatar: 'https://picsum.photos/200/300',
    },
    {
      id: '3',
      name: 'Alice Johnson',
      message: 'Let’s chat!',
      time: '10:10pm',
      avatar: 'https://picsum.photos/200/300',
    },
  ];
  const menuOptions = [
    {
      title: 'Settings',
      handler: () => {
        console.log('Option 1 selected');
      },
      hidden: false,
    },
  ];

  const navigation = useNavigation<NavigationProp<any>>();

  return (
    <View style={{flex: 1, paddingTop: 10}}>
      {/* Header Section */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 20,
        }}>
        {/* Profile and name */}
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{position: 'relative', width: 40, height: 40}}>
            <MaterialIcons
              size={40}
              name="support-agent"
              color="gray"
              style={{width: 40, height: 40, borderRadius: 20}}
            />
            <View
              style={{
                position: 'absolute',
                bottom: 0,
                right: 0,
                width: 14,
                height: 14,
                backgroundColor: 'green',
                borderRadius: 6,
                borderWidth: 2,
                borderColor: 'white',
              }}
            />
          </View>

          <Text
            style={{
              fontSize: 14,
              fontWeight: '400',
              marginLeft: 10,
            }}>
            Agent_34
          </Text>
        </View>
        <View style={{position: 'absolute', right: 0}}>
          <AdditionalMenu options={menuOptions} icon="dots-vertical" />
        </View>
      </View>

      {/* Chat List */}
      <FlashList
        data={chatData}
        renderItem={({item}) => (
          <Pressable onPress={() => navigation.navigate('Chat')}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 10,
                paddingVertical: 10,
              }}>
              <View style={{flexDirection: 'row'}}>
                <EvilIcons
                  size={50}
                  name="user"
                  color="gray"
                  style={{width: 50, height: 50, borderRadius: 25}}
                />
                <View style={{marginLeft: 10, justifyContent: 'center'}}>
                  <Text style={{fontSize: 16, fontWeight: '600'}}>
                    {item.name}
                  </Text>
                  <Text style={{fontSize: 12, color: '#555'}}>
                    {item.message}
                  </Text>
                </View>
              </View>

              <View>
                <Text style={{opacity: 0.5, fontSize: 12}}>{item.time}</Text>
              </View>
            </View>
          </Pressable>
        )}
        estimatedItemSize={80}
      />
    </View>
  );
};

export default ChatListScreen;
