import * as React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {FlashList} from '@shopify/flash-list';
import {useNavigation, NavigationProp} from '@react-navigation/native';

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

  const navigation = useNavigation<NavigationProp<any>>();

  return (
    <View style={{flex: 1, paddingTop: 10}}>
      <Text
        style={{
          padding: 10,
          fontSize: 20,
          fontWeight: 'bold',
          textAlign: 'center',
        }}>
        Chat
      </Text>

      <FlashList
        data={chatData}
        renderItem={({item}) => (
          <Pressable onPress={() => navigation.navigate('Chat')}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 10,
                paddingVertical: 5,
                borderBottomWidth: 1,
                borderBottomColor: '#ddd',
              }}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={{uri: item.avatar}}
                  style={{width: 50, height: 50, borderRadius: 25}}
                />
                <View style={{marginLeft: 10, justifyContent: 'center'}}>
                  <Text style={{fontSize: 14, fontWeight: '500'}}>
                    {item.name}
                  </Text>
                  <Text style={{fontSize: 12, color: '#555'}}>
                    {item.message}
                  </Text>
                </View>
              </View>

              <View style={{justifyContent: 'center'}}>
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
