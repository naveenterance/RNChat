import * as React from 'react';
import {View} from 'react-native';
import {FlashList} from '@shopify/flash-list';
import ChatListRender from './components/ChatListRender';
import {channelData} from '../data/sampleChannel';

const Channels = () => {
  return (
    <View style={{flex: 1, paddingTop: 10}}>
      <FlashList
        data={channelData}
        renderItem={({item}) => <ChatListRender item={item} />}
        estimatedItemSize={80}
      />
    </View>
  );
};

export default Channels;
