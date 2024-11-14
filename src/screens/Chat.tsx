import * as React from 'react';
import {View, Text, Image, TextInput, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {FlashList} from '@shopify/flash-list';
import {useRef, useState} from 'react';
import {chatData} from '../data/sampleChat';

const ChatScreen = () => {
  const flatListRef = useRef(null);
  const [messages, setMessages] = useState(chatData);
  const [inputText, setInputText] = useState('');

  const addMessage = () => {
    if (inputText.trim() === '') return;

    const newMessage = {
      id: (messages.length + 1).toString(),
      isSent: true,
      message: inputText,
      time: new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      }),
    };

    setMessages(prevMessages => [newMessage, ...prevMessages]);
    setInputText('');

    flatListRef.current?.scrollToIndex({index: 0});
  };
  return (
    <View style={{flex: 1}}>
      <View
        style={{flexDirection: 'row', padding: 10, backgroundColor: '#fff9'}}>
        <View style={{marginVertical: 'auto', paddingRight: 10}}>
          <Ionicons size={25} name={'chevron-back-sharp'} color={'gray'} />
        </View>
        <FontAwesome5 size={40} name={'user-circle'} color={'gray'} />
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
        inverted
        ref={flatListRef}
        data={messages}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <View
            style={{
              width: '100%',
              alignItems: item.isSent ? 'flex-end' : 'flex-start',
              padding: 10,
            }}>
            <View
              style={{
                backgroundColor: item.isSent ? '#0F1932' : 'white',
                padding: 10,
                borderRadius: 4,
                maxWidth: '70%',
              }}>
              <Text
                style={{fontSize: 15, color: item.isSent ? 'white' : 'black'}}>
                {item.message}
              </Text>
              <Text
                style={{
                  fontSize: 10,
                  textAlign: 'right',
                  color: item.isSent ? 'white' : 'black',
                  opacity: 0.5,
                }}>
                {item.time}
              </Text>
            </View>
          </View>
        )}
        estimatedItemSize={80}
      />
      <View
        style={{
          paddingVertical: 8,
          paddingHorizontal: 10,
          flexDirection: 'row',
          backgroundColor: '#fff9',
        }}>
        <TextInput
          style={{
            width: '80%',
            // flexDirection: 'row',
            // alignItems: 'center',
            // backgroundColor: '#fff',
            // borderRadius: 10,
            // paddingHorizontal: 10,
            // paddingVertical: 20,
          }}
          placeholder="Type a message"
          value={inputText}
          onChangeText={setInputText}
        />

        <Pressable
          onPress={addMessage}
          style={{
            marginVertical: 'auto',
            marginLeft: 10,
            marginRight: 5,
            padding: 12,
            // borderWidth: 4,
            // borderRadius: 50,
            // borderColor: '#5B8E1E',
          }}>
          <Icon size={30} name={'send'} color={'#5B8E1E'} />
        </Pressable>
      </View>
    </View>
  );
};

export default ChatScreen;
