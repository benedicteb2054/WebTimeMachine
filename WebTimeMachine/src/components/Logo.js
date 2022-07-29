import React, { memo } from 'react';
import { Image, StyleSheet, View } from 'react-native';

const Logo = () => (
    <Image  style={styles.image} />
);

const styles = StyleSheet.create({
  image: {
    width: 154,
    height:119,
    resizeMode:'contain'
  },
});

export default memo(Logo);
