import * as React from 'react';
import {View, Text} from 'react-native';

const SettingsScreen = () => {
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <Text style={{padding: 10, fontSize: 20, fontWeight: 'bold'}}>
        Settings
      </Text>
    </View>
  );
};

export default SettingsScreen;
