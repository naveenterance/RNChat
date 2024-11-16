import * as React from 'react';
import {View, Text, TextInput, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {FlashList} from '@shopify/flash-list';
import {useRef, useState, useCallback} from 'react';
import {useChatStore} from '../context/chatStore';
import moment from 'moment';

const ChatScreen = () => {
  const flashListRef = useRef<FlashList<any>>(null);

  const addMessage = useChatStore(state => state.addMessage);
  const removeMessage = useChatStore(state => state.removeMessage);
  const messages = useChatStore(state => state.messages);
  const sortedMessages = useChatStore(state => state.sortedMessages);

  const [inputText, setInputText] = useState('');

  const addMessages = useCallback(() => {
    if (inputText.trim() === '') return;

    addMessage({
      id: (messages.length + 1).toString(),
      isSent: true,
      message: inputText,
      time: new Date().toISOString(), // Use ISO format for time
    });
    setInputText('');
  }, [inputText, addMessage, messages.length]);

  // Function to scroll to the bottom when a new message is added
  const scrollToBottom = useCallback(() => {
    if (flashListRef.current) {
      flashListRef.current.scrollToIndex({index: 0});
    }
  }, []);

  React.useEffect(() => {
    if (messages.length > 0) {
      scrollToBottom();
    }
  }, [messages, scrollToBottom]);

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
        ref={flashListRef}
        data={sortedMessages}
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
                {moment(item.time).format('h:mm A')}
                {/* {new Date(item.time).getTime()} */}
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
          }}
          placeholder="Type a message"
          value={inputText}
          onChangeText={setInputText}
        />

        <Pressable
          onPress={addMessages}
          style={{
            marginVertical: 'auto',
            marginLeft: 10,
            marginRight: 5,
            padding: 12,
          }}>
          <Icon size={30} name={'send'} color={'#5B8E1E'} />
        </Pressable>
      </View>
    </View>
  );
};

export default ChatScreen;
