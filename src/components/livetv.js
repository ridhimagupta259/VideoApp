import React from 'react';
import {
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';
//import {connect} from 'react-redux';
import {toggleFlag} from '../services/Home/action';
import {imageConstants} from '../config/constants';
class Livetv extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {navigation, flag} = this.props;
    return (
      <ImageBackground source={imageConstants.layer_1} style={styles.container}>
        <TouchableOpacity onPress={() => this.props.navigation.toggleDrawer()}>
          <Image
            style={{width: 20, height: 20, backgroundColor: 'white'}}
            source={require('../assets/menu.png')}
          />
        </TouchableOpacity>
      </ImageBackground>
    );
  }
  componentDidMount() {}
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E3DFDE',
    flex: 1,
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
export default Livetv;
