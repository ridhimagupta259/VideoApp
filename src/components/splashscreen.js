import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
// import {connect} from 'react-redux';
// import {toggleSplash} from '../Services/Authentication/action';
// import AsyncStorage from '@react-native-community/async-storage';
import {colorConstants, imageConstants} from '../config/constants';

class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flag: false,
    };
  }
  onChangeText(input) {}
  render() {
    return (
      <View style={styles.container}>
        <Image source={imageConstants.splash} />
      </View>
    );
  }
  //   _retrieveData = async () => {
  //     const {navigation} = this.props;
  //     try {
  //       const value = await AsyncStorage.getItem('headerToken');
  //       if (value !== null) {
  //         this.props.toggleSplash();
  //         setTimeout(() => {
  //           navigation.reset({
  //             index: 0,
  //             routes: [{name: 'Concept'}],
  //           });
  //         }, 500);
  //       }
  //       if (value === null) {
  //         setTimeout(() => {
  //           navigation.reset({
  //             index: 0,
  //             routes: [{name: 'LoginScreen'}],
  //           });
  //         }, 500);
  //       }
  //     } catch (error) {
  //       console.warn('no data');
  //       // Error retrieving data
  //     }
  //   };
  componentDidMount() {
    const {navigation} = this.props;
    setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [{name: 'Login'}],
      });
    }, 1000);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
// const mapStateToProps = state => ({

// });

// const mapDispatchToProps = {

// };
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(Splash);

export default Splash;
