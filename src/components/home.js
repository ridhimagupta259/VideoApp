import React from 'react';
import {Text, StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native';
//import {connect} from 'react-redux';
import {toggleFlag} from '../services/Home/action';
class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {navigation, flag} = this.props;
    return (
      <SafeAreaView style={styles.container}>
        {/* <TouchableOpacity
          onPress={() => {
            navigation.navigate('Home');
          }}>
          <Text>Move to Home</Text>
          {/* <Text>{flag}</Text> */}
        {/* </TouchableOpacity> */} 
      </SafeAreaView>
    );
  }
  componentDidMount() {}
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E3DFDE',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textEdit: {
    fontSize: 25,
    paddingTop: 50,
    paddingLeft: 20,
    color: '#fff',
  },
});

// const mapStateToProps = state => ({
//   //flag: state.homeReducer.homeFlag,
// });

// const mapDispatchToProps = state => ({
//   //toggleHomeFlag: toggleFlag,
// });

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(Home);
export default Home;
