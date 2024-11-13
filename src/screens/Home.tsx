import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {useNavigation, NavigationProp} from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
};

export default HomeScreen;
