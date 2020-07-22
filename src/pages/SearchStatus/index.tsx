import React, {useEffect, useRef} from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from 'react-native-elements';
import macroStyles from '@/macroStyles.js';
import globalStyles from '@/globalStyles.js';
import globalObj from '@/globalObj.js';

const SearchList = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      let url = 'SearchList';
      if (globalObj.isConnected) {
        url = 'PenManage';
        globalObj.isConnected = false;
      }
      navigation.navigate(url);
    }, 3000);
  });

  return (
    <View style={{...globalStyles.containerWrap, ...styles.container}}>
      <View style={styles.circleWrap}>
        <View style={styles.firstCircle}>
          <View style={styles.secondCircle}>
            <View style={styles.thirdCircle}>
              <View style={styles.fourthCircle}>
                <Text style={styles.circleText}>寻找设备中...</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.reSearth}>
        <Text style={{color: macroStyles.black4}}>重新查找</Text>
      </View>
    </View>
  );
};

const {screenWidth} = macroStyles;

const drawCircle = (size: number, width?: number): Object => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: width ? width : screenWidth * size,
  height: width ? width : screenWidth * size,
  borderRadius: width ? width / 2 : screenWidth / 2,
});

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    paddingTop: 20,
  },
  circleWrap: {
    ...drawCircle(1),
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#e4e7fb',
  },
  firstCircle: {
    ...drawCircle(3 / 4),
    backgroundColor: '#f6f7fe',
  },
  secondCircle: {
    ...drawCircle(0, 180),
    backgroundColor: '#e9ecff',
  },
  thirdCircle: {
    ...drawCircle(0, 160),
    backgroundColor: '#ccd5ff',
  },
  fourthCircle: {
    ...drawCircle(0, 140),
    backgroundColor: '#b3c1fa',
  },
  circleText: {
    color: '#4359c6',
  },
  reSearth: {
    position: 'absolute',
    bottom: 100,
  },
});

export default SearchList;
