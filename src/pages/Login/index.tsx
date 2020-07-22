import React, {useEffect, useState, useRef} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Button, Input, Card, Text} from 'react-native-elements';
import logo from '@/assets/images/logo.png';
import macroStyles from '@/macroStyles.js';
import globalStyles from '@/globalStyles.js';


const HelloWorldApp = ({navigation}) => {
  const [account, setAccount] = useState<string>('abc@qq.com');
  const [password, setPassword] = useState<string>('12345678');
  const [accountError, setAccountError] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');

  const ifChangeValue = useRef(true);

  useEffect(() => {
    // 第一次不校验
    if (ifChangeValue.current) {
      return;
    }
    validate();
  }, [account, password]);

  const validate = () => {
    let accountErrorMessage = '';
    let passwordErrorMessage = '';
    if (!account.trim().length) {
      accountErrorMessage = '请输入账号';
    } else if (account.trim().length < 5 || account.trim().length > 20) {
      accountErrorMessage = '账号位数位5～20';
    }

    if (!password.length) {
      passwordErrorMessage = '请输入密码';
    }
    setAccountError(accountErrorMessage);
    setPasswordError(passwordErrorMessage);
    return !accountErrorMessage && !passwordErrorMessage;
  };

  const login = () => {
    if (validate()) {
      navigation.navigate('SearchStatus');
    }
  };

  return (
    <View style={{...globalStyles.containerWrap, ...styles.container}}>
      <Card containerStyle={styles.card}>
        <Image source={logo} style={styles.logo} />
      </Card>
      <View style={styles.form}>
        <Input
          value={account}
          placeholder="请输入账号"
          inputStyle={{fontSize: 14}}
          inputContainerStyle={{borderBottomColor: macroStyles.black5}}
          leftIcon={<Icon name="user-o" size={14} color={macroStyles.blue6} />}
          onChangeText={(value: string) => {
            setAccount(value);
            ifChangeValue.current = false;
          }}
          errorMessage={accountError}
        />
        <Input
          value={password}
          placeholder="请输入密码"
          inputStyle={{fontSize: 14}}
          inputContainerStyle={{borderBottomColor: macroStyles.black5}}
          leftIcon={<Icon name="lock" size={14} color={macroStyles.blue6} />}
          onChangeText={(value: string) => {
            setPassword(value);
            ifChangeValue.current = false;
          }}
          errorMessage={passwordError}
        />
      </View>
      <View style={styles.loginBtnWrap}>
        <Button
          title="登录"
          onPress={login}
          titleStyle={{fontSize: 14}}
          buttonStyle={styles.loginBtn}
        />
      </View>
      <View style={styles.bottomText}>
        <Text>忘记密码?</Text>
        <Text>新用户注册</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    padding: 0,
  },
  card: {
    padding: 0,
    margin: 0,
    paddingTop: 30,
    borderWidth: 0,
    display: 'flex',
    alignItems: 'center',
    height: 160,
  },
  logo: {
    height: 50,
  },
  form: {
    padding: 20,
    marginTop: 20,
    height: 200,
  },
  formInput: {
    marginTop: 10,
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: macroStyles.black5,
    borderStyle: 'solid',
  },
  loginBtnWrap: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  loginBtn: {
    width: 300,
    padding: 10,
    borderRadius: 30,
  },
  bottomText: {
    width: 300,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 30,
  },
});

export default HelloWorldApp;
