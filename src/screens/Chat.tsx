import * as React from 'react';
import {View, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const ChatScreen = () => {
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <Text style={{padding: 10, fontSize: 20, fontWeight: 'bold'}}>Chat</Text>
      <View
        style={{
          width: '100%',
          justifyContent: 'space-between',
          flexDirection: 'row',
          paddingHorizontal: 10,
          paddingVertical: 5,
        }}>
        <View style={{flexDirection: 'row'}}>
          <Icon name={'person-circle-outline'} size={50} color={'gray'} />;
          <View style={{marginLeft: 10, marginVertical: 'auto'}}>
            <Text style={{fontSize: 14, fontWeight: '500'}}>John doe</Text>
            <Text style={{fontSize: 12}}>What does this do?</Text>
          </View>
        </View>
        <View style={{marginVertical: 'auto'}}>
          <Text style={{opacity: 0.5}}>10:00pm</Text>
        </View>
      </View>
      <View
        style={{
          width: '100%',
          justifyContent: 'space-between',
          flexDirection: 'row',
          paddingHorizontal: 10,
          paddingVertical: 5,
        }}>
        <View style={{flexDirection: 'row'}}>
          <Icon name={'person-circle-outline'} size={50} color={'gray'} />;
          <View style={{marginLeft: 10, marginVertical: 'auto'}}>
            <Text style={{fontSize: 14, fontWeight: '500'}}>John doe</Text>
            <Text style={{fontSize: 12}}>What does this do?</Text>
          </View>
        </View>
        <View style={{marginVertical: 'auto'}}>
          <Text style={{opacity: 0.5}}>10:00pm</Text>
        </View>
      </View>
    </View>
  );
};

export default ChatScreen;
