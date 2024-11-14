import * as React from 'react';
import {View, Text} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

const SettingsScreen = () => {
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <Text style={{padding: 10, fontSize: 20, fontWeight: '700'}}>
        Settings
      </Text>

      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          paddingHorizontal: 20,
          alignItems: 'center',

          paddingVertical: 50,
        }}>
        <View style={{position: 'relative', width: 50, height: 50}}>
          <FontAwesome5
            size={50}
            name="user-circle"
            color="gray"
            style={{width: 50, height: 50, borderRadius: 25}}
          />

          <View
            style={{
              position: 'absolute',
              bottom: 0,
              right: 0,
              width: 20,
              height: 20,
              backgroundColor: 'green',
              borderRadius: 9,
              borderWidth: 2,
              borderColor: 'white',
            }}
          />
        </View>

        <Text
          style={{
            fontSize: 16,
            fontWeight: '500',
            marginLeft: 10,
            alignSelf: 'center',
          }}>
          Timmy
        </Text>
      </View>
      <View
        style={{
          width: '100%',
          paddingHorizontal: 20,
          paddingVertical: 15,

          justifyContent: 'space-between',
          flexDirection: 'row',
        }}>
        <Text style={{fontSize: 16, fontWeight: 400, marginVertical: 'auto'}}>
          Availability
        </Text>

        <MaterialCommunityIcons
          size={30}
          name="antenna"
          color="#5B8E1E"
          style={{
            marginVertical: 'auto',
          }}
        />
      </View>
      <View
        style={{
          width: '100%',
          paddingHorizontal: 20,
          paddingVertical: 15,

          justifyContent: 'space-between',
          flexDirection: 'row',
        }}>
        <Text style={{fontSize: 16, fontWeight: 400, marginVertical: 'auto'}}>
          Change Language
        </Text>

        <Ionicons
          size={30}
          name="globe-outline"
          color="#5B8E1E"
          style={{
            marginVertical: 'auto',
          }}
        />
      </View>
      <View
        style={{
          width: '100%',
          paddingHorizontal: 20,
          paddingVertical: 15,

          justifyContent: 'space-between',
          flexDirection: 'row',
        }}>
        <Text style={{fontSize: 16, fontWeight: 400, marginVertical: 'auto'}}>
          Theme
        </Text>

        <Entypo
          size={30}
          name="light-down"
          color="#5B8E1E"
          style={{
            marginVertical: 'auto',
          }}
        />
      </View>
      <View
        style={{
          width: '100%',
          paddingHorizontal: 20,
          paddingVertical: 15,

          justifyContent: 'space-between',
          flexDirection: 'row',
        }}>
        <Text style={{fontSize: 16, fontWeight: 400, marginVertical: 'auto'}}>
          Logout
        </Text>

        <MaterialCommunityIcons
          size={30}
          name="logout"
          color="#5B8E1E"
          style={{
            marginVertical: 'auto',
          }}
        />
      </View>
    </View>
  );
};

export default SettingsScreen;
