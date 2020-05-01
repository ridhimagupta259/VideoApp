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
  FlatList,
} from 'react-native';
import {connect} from 'react-redux';
import {dataApi} from '../services/Home/action';
import {imageConstants, colorConstants} from '../config/constants';
import Carousel from 'react-native-snap-carousel';
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      carouselItems: [
        {
          title: 'Item 1',
        },
        {
          title: 'Item 2',
        },
        {
          title: 'Item 3',
        },
        {
          title: 'Item 4',
        },
        {
          title: 'Item 5',
        },
      ],
    };
  }

  render() {
    const {navigation, flag, isData} = this.props;
    console.log(isData.results[0]);
    return (
      <ScrollView style={{backgroundColor: colorConstants.black}}>
        <ImageBackground
          source={imageConstants.layer_1}
          style={styles.container}>
          <View style={styles.upperview}>
            <View style={styles.rowview}>
              <TouchableOpacity
                onPress={() => this.props.navigation.toggleDrawer()}>
                <Image style={styles.topimages} source={imageConstants.menu} />
              </TouchableOpacity>
              <Text style={styles.textEdit}>APP LOGO</Text>
            </View>
            <View style={styles.rowview}>
              <Image style={styles.topimages} source={imageConstants.bell} />
              <Image style={styles.topimages} source={imageConstants.find} />
            </View>
          </View>
          <View style={styles.firstlist}>
            <Carousel
              layout={'default'}
              //ref={ref => (this.carousel = ref)}
              data={this.state.carouselItems}
              sliderWidth={400}
              itemWidth={300}
              renderItem={this._renderItem}
              onSnapToItem={index => this.setState({activeIndex: index})}
            />
          </View>
          <View style={styles.movietext}>
            <Text style={styles.moviefont}>MOVIES</Text>
            <View>
              <Text style={styles.showtext}>Show All</Text>
            </View>
          </View>
          <View style={styles.flatlistview}>
            <FlatList
              horizontal
              data={isData.results}
              renderItem={item => {
                return (
                  <View style={styles.newcontainer}>
                    <View style={styles.newupper}>
                      
                    </View>
                    <View style={styles.newlower} />
                  </View>
                );
              }}
              keyExtractor={item => item.id}
            />
          </View>
          <View style={styles.movietext}>
            <Text style={styles.moviefont}>LIVE CHANNELS</Text>
            <View>
              <Text style={styles.showtext}>Show All</Text>
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
    );
  }

  componentDidMount() {
    this.props.dataHomeApi();
  }
  _renderItem({item, index}) {
    return (
      <View style={styles.carouseview}>
        <Text>{item.title}</Text>
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
  movietext: {
    flex: 0.5,
    //backgroundColor: 'red',
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  moviefont: {
    color: colorConstants.white,
    fontSize: 15,
  },
  showtext: {
    color: colorConstants.pink,
  },
  upperview: {
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowview: {flexDirection: 'row'},
  firstlist: {height: 150, marginTop: 20},
  newcontainer: {
    height: 200,
    width: 150,
    backgroundColor: '#fff',
    margin: 10,
    borderRadius: 5,
  },
  newupper: {flex: 0.7, backgroundColor: 'pink'},
  newlower: {flex: 0.3, backgroundColor: colorConstants.black},
  flatlistview: {
    flex: 1,
    margin: 10,
    shadowColor: '#999999',
    shadowOffset: {width: 1, height: 1},
    shadowRadius: 3,
    shadowOpacity: 1,
  },
  carouseview: {
    backgroundColor: 'floralwhite',
    borderRadius: 5,
    height: 250,
    padding: 50,
    marginLeft: 25,
    marginRight: 25,
  },
});

const mapStateToProps = state => ({
  isData: state.homeReducer.isData,
});

const mapDispatchToProps = {
  dataHomeApi: dataApi,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
