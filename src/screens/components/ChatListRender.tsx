import React from 'react';
import {FlashList} from '@shopify/flash-list';
import {Pressable, View, Text} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {useNavigation, NavigationProp} from '@react-navigation/native';

const ChatListRender = ({item}: {item: any}) => {
  const navigation = useNavigation<NavigationProp<any>>();
  return (
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
            <Text style={{fontSize: 16, fontWeight: '600'}}>{item.name}</Text>
            <Text style={{fontSize: 12, color: '#555'}}>{item.message}</Text>
          </View>
        </View>

        <View style={{}}>
          {item.seen && (
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
          )}
          <Text style={{opacity: 0.5, fontSize: 12}}>{item.time}</Text>
        </View>
      </View>
    </Pressable>
  );
};
export default ChatListRender;
