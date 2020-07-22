import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ListItem, Button} from 'react-native-elements';
import globalStyles from '@/globalStyles.js';
import macroStyles from '@/macroStyles';

const SearchList = ({navigation}) => {
  const buttons = [
    {
      label: '设备编号',
      value: '设备0131',
      id: '1',
    },
    {
      label: '用户名',
      value: '张三',
      id: '2',
    },
    {
      label: '设备状态',
      value: '使用中',
      id: '3',
    },
  ];
  return (
    <View style={{...globalStyles.containerWrap}}>
      {buttons.map(({id, label, value}) => (
        <ListItem
          key={id}
          title={label}
          bottomDivider
          rightElement={<Text style={styles.text}>{value}</Text>}
        />
      ))}
    </View>
  );
};
const styles = StyleSheet.create({
  buttonStyle: {
    width: 100,
  },
  text: {
    color: macroStyles.black4,
  },
});

export default SearchList;
