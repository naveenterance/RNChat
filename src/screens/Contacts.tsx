import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import {FlashList} from '@shopify/flash-list';
import {contactsData} from '../data/smapleContacts';

const Contacts = () => {
  return (
    <FlashList
      data={contactsData}
      renderItem={({item}) => (
        <Pressable
          onPress={() => console.log(`Contact selected: ${item.name}`)}>
          <View
            style={{flexDirection: 'row', padding: 10, alignItems: 'center'}}>
            <Image
              source={{uri: item.avatar}}
              style={{width: 50, height: 50, borderRadius: 25}}
            />
            <View style={{marginLeft: 10}}>
              <Text style={{fontSize: 16, fontWeight: '600'}}>{item.name}</Text>
              <Text style={{fontSize: 14, color: '#555'}}>{item.phone}</Text>
              <Text style={{fontSize: 12, color: '#888'}}>{item.status}</Text>
            </View>
          </View>
        </Pressable>
      )}
      estimatedItemSize={80}
    />
  );
};

export default Contacts;
