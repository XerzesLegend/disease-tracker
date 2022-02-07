import HorizontalPicker from '@vseslav/react-native-horizontal-picker';
import {Text, View } from 'react-native';

const Items = Array.from(Array(100).keys());

const RI = (item, index) => (
  <View style={{ width: 80 }}>
    <Text>
      { item }
    </Text>
  </View>
);

export default function PickerSlider() {
  return (
    <HorizontalPicker
      data={Items}
      renderItem={RI}
      itemWidth={80}
      defaultIndex={7}
    />
  );
}