import React from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  View,
  Image,
  TextInput,
} from 'react-native';
import {imageConstants, colorConstants} from '../config/constants';
//const Realm = require('realm');

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      realm: null,
    };
  }

  render() {
    const {navigation, flag} = this.props;
    const {username, password, realm} = this.state;
    return (
      <ImageBackground source={imageConstants.layer_1} style={styles.container}>
        <View style={styles.logoview}>
          <Image source={imageConstants.logo} />
        </View>
        <View style={styles.appview}>
          <Text style={styles.apptext}>APP NAME</Text>
        </View>
        <View style={styles.loginview}>
          <View style={{marginRight: 20, marginTop: 5}}>
            <Text style={styles.logintext}>Login</Text>
          </View>
          <Text style={styles.dividetext}>|</Text>
          <View style={{marginLeft: 20, marginTop: 5}}>
            <Text style={styles.signtext}>Sign up</Text>
          </View>
        </View>
        <View style={styles.textview}>
          <Text style={styles.text1}>Please login to access your account</Text>
        </View>

        <View style={styles.textinputview}>
          <Image source={imageConstants.person2} style={styles.imagestyle} />

          <TextInput
            style={styles.textinput}
            placeholder="User Name"
            placeholderTextColor={colorConstants.grey}
            onChangeText={text => this.setState({username: text})}
          />
        </View>

        <View style={styles.textinputview}>
          <Image source={imageConstants.person2} style={styles.imagestyle} />

          <TextInput
            style={styles.textinput}
            placeholder="Password"
            placeholderTextColor={colorConstants.grey}
            secureTextEntry="true"
            onChangeText={text => this.setState({password: text})}
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            //if (username === 'Admin' && password === 'Admin') {
            this.props.navigation.navigate('MyDrawer');
            //}
          }}>
          <View style={styles.loginbuttonview}>
            <Text style={styles.logintextbutton}>Login</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.forgotview}>
          <Text style={styles.forgottext}>Forgot Password ?</Text>
        </View>
      </ImageBackground>
    );
  }
  componentDidMount() {}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  view: {
    flex: 1,
  },
  apptext: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colorConstants.white,
    alignContent: 'center',
  },
  appview: {
    alignItems: 'center',
  },
  logoview: {
    alignItems: 'center',
    marginTop: 80,
  },
  loginview: {
    flexDirection: 'row',
    marginTop: 50,
    justifyContent: 'center',
  },
  logintext: {
    fontSize: 25,
    color: colorConstants.pink,
    fontWeight: 'bold',
  },
  dividetext: {
    fontSize: 30,
    color: colorConstants.grey,
  },
  signtext: {
    fontSize: 25,
    color: colorConstants.lightgrey,
    fontWeight: 'bold',
  },
  text1: {
    color: colorConstants.grey,
    fontSize: 17,
  },
  textview: {
    marginTop: 15,
    alignItems: 'center',
  },
  textinputview: {
    backgroundColor: colorConstants.blue,
    marginHorizontal: 20,
    marginTop: 30,
    color: colorConstants.white,
    flexDirection: 'row',
    borderRadius: 5,
  },
  textinput: {
    color: colorConstants.white,
    padding: 15,
    fontSize: 15,
    width: '80%',
  },
  imagestyle: {
    alignItems: 'center',
    height: 30,
    marginLeft: 10,
    marginTop: 10,
  },
  loginbuttonview: {
    backgroundColor: colorConstants.pink,
    padding: 10,
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 30,
    borderRadius: 5,
  },
  logintextbutton: {
    color: colorConstants.white,
    fontSize: 20,
  },
  forgotview: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
  },
  forgottext: {
    color: colorConstants.grey,
  },
});

export default Login;
