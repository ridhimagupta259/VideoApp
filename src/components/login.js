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
import {imageConstants} from '../config/constants';
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  render() {
    const {navigation, flag} = this.props;
    return (
      <ImageBackground source={imageConstants.layer_1} style={styles.container}>
        <View style={styles.logoview}>
          <Image source={require('../assets/logo.png')} />
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
          <Image
            source={require('../assets/person2.png')}
            style={styles.imagestyle}
          />

          <TextInput
            style={styles.textinput}
            placeholder="User Name"
            placeholderTextColor="#737373"
            onChangeText={text => this.setState({username: text})}
          />
        </View>

        <View style={styles.textinputview}>
          <Image
            source={require('../assets/person2.png')}
            style={styles.imagestyle}
          />

          <TextInput
            style={styles.textinput}
            placeholder="Password"
            placeholderTextColor="#737373"
            secureTextEntry="true"
            onChangeText={text => this.setState({password: text})}
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('Home');
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
    color: '#fff',
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
    color: '#e4264e',
    fontWeight: 'bold',
  },
  dividetext: {
    fontSize: 30,
    color: '#737373',
  },
  signtext: {
    fontSize: 25,
    color: '#bfbfbf',
    fontWeight: 'bold',
  },
  text1: {
    color: '#737373',
    fontSize: 17,
  },
  textview: {
    marginTop: 15,
    alignItems: 'center',
  },
  textinputview: {
    backgroundColor: '#181f29',
    marginHorizontal: 20,
    marginTop: 30,
    color: 'white',
    flexDirection: 'row',
    borderRadius: 5,
  },
  textinput: {
    color: '#fff',
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
    backgroundColor: '#e4264e',
    padding: 10,
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 30,
    borderRadius: 5,
  },
  logintextbutton: {
    color: 'white',
    fontSize: 20,
  },
  forgotview: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
  },
  forgottext: {
    color: '#737373',
  },
});

export default Login;
