import React from 'react';
import {
  View,
  Text,
} from 'react-native';

const SignItem = ({ backgroundColor, width, height, sign }) => {

  return (
    <View style={{
      width,
      height
    }}>
      <Text>
        {sign}
      </Text>
    </View>
  );
};

export default SignItem;