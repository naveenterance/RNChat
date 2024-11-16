import * as React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {FlashList} from '@shopify/flash-list';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AdditionalMenu from './AdditionalMenu';

const Header = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  const menuOptions = [
    {
      title: 'Settings',
      handler: () => {
        navigation.navigate('Settings');
      },
      hidden: false,
    },
  ];
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
      }}>
      {/* Profile and name */}
      <Pressable
        onPress={() => {
          navigation.navigate('Settings');
        }}
        style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={{position: 'relative', width: 40, height: 40}}>
          <EvilIcons
            size={45}
            name="user"
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
      </Pressable>
      <View style={{position: 'absolute', right: 0}}>
        <AdditionalMenu options={menuOptions} icon="dots-vertical" />
      </View>
    </View>
  );
};

export default Header;
