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
import {dataApi, pictureApi} from '../services/Home/action';
import {imageConstants, colorConstants} from '../config/constants';
import Carousel, {Pagination} from 'react-native-snap-carousel';
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      carouselItems: [
        {
          title: imageConstants.photo,
        },
        {
          title: imageConstants.photo,
        },
        {
          title: imageConstants.photo,
        },
        {
          title: imageConstants.photo,
        },
        {
          title: imageConstants.photo,
        },
      ],
    };
  }

  render() {
    const {navigation, flag, isData} = this.props;
    //console.log(isData.results[0].backdrop_path);
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
            {this.pagination()}
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
              renderItem={this._picdata}
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
  pagination() {
    const {carouselItems, activeIndex} = this.state;
    return (
      <Pagination
        dotsLength={carouselItems.length}
        activeDotIndex={activeIndex}
        dotStyle={styles.dot}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    );
  }

  componentDidMount() {
    this.props.dataHomeApi();
    // this.props.pictureHomeApi(this.state.isData);
  }
  _renderItem({item}) {
    return (
      <View style={styles.carouseview}>
        <TouchableOpacity>
          <Image source={item.title} style={styles.imagestyle} />
        </TouchableOpacity>
      </View>
    );
  }
  _picdata({item}) {
    return (
      <View style={styles.newcontainer}>
        <View style={styles.newupper} />
        <View style={styles.newlower}>
          <Text style={{color: colorConstants.white}}>{item.title}</Text>
          <Text style={{color: colorConstants.white}}>{item.vote_average}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imagestyle: {
    borderRadius: 5,
    height: 200,
    width: 300,
  },
  textEdit: {
    fontSize: 20,

    paddingLeft: 20,
    color: colorConstants.white,
    fontWeight: 'bold',
  },
  topimages: {
    width: 28,
    height: 28,
    backgroundColor: colorConstants.white,
    marginLeft: 10,
  },
  movietext: {
    flex: 0.5,
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
  firstlist: {height: 200, marginTop: 20},
  newcontainer: {
    height: 200,
    width: 150,
    backgroundColor: colorConstants.white,
    margin: 10,
    borderRadius: 5,
  },
  newupper: {flex: 0.7, backgroundColor: colorConstants.white},
  newlower: {flex: 0.3, backgroundColor: colorConstants.darkgrey},
  flatlistview: {
    flex: 1,
    margin: 10,
  },
  carouseview: {
    padding: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  dot: {
    width: 5,
    height: 5,
    borderRadius: 10,
    marginHorizontal: 2,
    backgroundColor: colorConstants.white,
  },
});

const mapStateToProps = state => ({
  isData: state.homeReducer.isData,
});

const mapDispatchToProps = {
  dataHomeApi: dataApi,
  pictureHomeApi: pictureApi,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
