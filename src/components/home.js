import React from 'react';
import {
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
  Image,
  View,
  ScrollView,
} from 'react-native';
//import {connect} from 'react-redux';
import {toggleFlag} from '../services/Home/action';
import {imageConstants} from '../config/constants';
import Carousel from 'react-native-snap-carousel';
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      carouselItems: [
        {
          title: 'Item 1',
          text: 'Text 1',
        },
        {
          title: 'Item 2',
          text: 'Text 2',
        },
        {
          title: 'Item 3',
          text: 'Text 3',
        },
        {
          title: 'Item 4',
          text: 'Text 4',
        },
        {
          title: 'Item 5',
          text: 'Text 5',
        },
      ],
    };
  }

  render() {
    const {navigation, flag} = this.props;
    return (
      <ScrollView style={{backgroundColor:'#000'}}>
        <ImageBackground
          source={imageConstants.layer_1}
          style={styles.container}>
          <View
            style={{
              marginTop: 40,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                onPress={() => this.props.navigation.toggleDrawer()}>
                <Image
                  style={styles.topimages}
                  source={require('../assets/menu.png')}
                />
              </TouchableOpacity>
              <Text style={styles.textEdit}>APP LOGO</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={styles.topimages}
                source={require('../assets/bell.png')}
              />
              <Image
                style={styles.topimages}
                source={require('../assets/find.png')}
              />
            </View>
          </View>
          <View style={{height:150, marginTop: 20}}>
            <Carousel
              layout={'default'}
              //ref={ref => (this.carousel = ref)}
              data={this.state.carouselItems}
              sliderWidth={400}
              itemWidth={300}
              sliderHeight={200}
              itemHeight={200}
              renderItem={this._renderItem}
              onSnapToItem={index => this.setState({activeIndex: index})}
            />
          </View>
        </ImageBackground>
      </ScrollView>
    );
  }
  componentDidMount() {}
  _renderItem({item, index}) {
    return (
      <View
        style={{
          backgroundColor: 'floralwhite',
          borderRadius: 5,
          height: 250,
          padding: 50,
          marginLeft: 25,
          marginRight: 25,
        }}>
        <Text style={{fontSize: 30}}>{item.title}</Text>
        <Text>{item.text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textEdit: {
    fontSize: 20,
    //paddingTop: 50,
    paddingLeft: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  topimages: {
    width: 28,
    height: 28,
    backgroundColor: 'white',
    marginLeft: 10,
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
