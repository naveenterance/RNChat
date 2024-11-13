import * as React from 'react';
import {View, Text, Image, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {FlashList} from '@shopify/flash-list';

const ChatScreen = () => {
  const chatData = [
    {
      id: '1',
      isSent: true,
      message: 'What does this do?',
      time: '10:00pm',
    },
    {
      id: '2',
      isSent: true,
      message: 'This is a sample message.',
      time: '10:05pm',
    },
    {
      id: '3',
      isSent: false,
      message: 'Let’s chat!',
      time: '10:10pm',
    },
  ];

  return (
    <View style={{flex: 1}}>
      <View
        style={{flexDirection: 'row', padding: 10, backgroundColor: '#fff9'}}>
        <FontAwesome5 size={40} name={'user-circle'} />
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            marginVertical: 'auto',
            padding: 10,
          }}>
          User234
        </Text>
      </View>

      <FlashList
        data={chatData}
        renderItem={({item}) => (
          <View
            style={{
              width: '100%',
              alignItems: item.isSent ? 'flex-end' : 'flex-start',
              padding: 10,
            }}>
            <View
              style={{
                backgroundColor: item.isSent ? 'gray' : 'white',
                padding: 10,
                borderRadius: 4,
                maxWidth: '70%',
              }}>
              <Text style={{fontSize: 15}}>{item.message}</Text>
            </View>
          </View>
        )}
        estimatedItemSize={80}
      />
      <View
        style={{
          paddingVertical: 20,
          paddingHorizontal: 10,
          flexDirection: 'row',
          backgroundColor: '#fff9',
        }}>
        <TextInput style={{width: '80%'}} placeholder="Type a  message" />

        <View style={{marginVertical: 'auto', marginLeft: 20}}>
          <Icon size={30} name={'send'} color={'gray'} />
        </View>
      </View>
    </View>
  );
};

export default ChatScreen;
