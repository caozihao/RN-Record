import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import {ListItem, Button} from 'react-native-elements';
import globalStyles from '@/globalStyles.js';
import globalObj from '@/globalObj.js';

const SearchList = ({navigation}) => {
  const [loading1, setLoading1] = useState<boolean>(false);
  const [loading2, setLoading2] = useState<boolean>(false);
  const [loading3, setLoading3] = useState<boolean>(false);

  useEffect(() => {
    if (loading1) {
      setTimeout(() => {
        setLoading1(false);
        Alert.alert('连接成功');
        globalObj.isConnected = true;
      }, 3000);
    }

    if (loading2) {
      setTimeout(() => {
        setLoading2(false);
        Alert.alert('连接成功');
        globalObj.isConnected = true;
      }, 3000);
    }

    if (loading3) {
      setTimeout(() => {
        setLoading3(false);
        Alert.alert('连接成功');
        globalObj.isConnected = true;
      }, 3000);
    }
  }, [loading1, loading2, loading3]);

  const buttons = [
    {
      name: '设备0131',
      id: '1',
      loading: loading1,
    },
    {
      name: '设备0245',
      id: '2',
      loading: loading2,
    },
    {
      name: '设备1455',
      id: '3',
      loading: loading3,
    },
  ];
  return (
    <View style={{...globalStyles.containerWrap}}>
      {buttons.map(({name, id, loading}) => (
        <ListItem
          key={id}
          title={name}
          bottomDivider
          rightElement={
            <Button
              onPress={() => {
                const setLoadingDict = {
                  1: () => setLoading1(true),
                  2: () => setLoading2(true),
                  3: () => setLoading3(true),
                };
                setLoadingDict[id]();
              }}
              title="连接"
              buttonStyle={styles.buttonStyle}
              loading={loading}
            />
          }
        />
      ))}
    </View>
  );
};
const styles = StyleSheet.create({
  buttonStyle: {
    width: 100,
  },
});

export default SearchList;
