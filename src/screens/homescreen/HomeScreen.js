import React from 'react';
import { View,ScrollView} from 'react-native';
import TopFive from './TopFive';
import MarvelStudiosMovies from './MarvelStudiosMovies';
import MarvelStudiosSeries from './MarvelStudiosSeries';
import SonyMarvel from './SonyMarvel';
import FoxMarvel from './FoxMarvel';
import OthersMarvel from './OthersMarvel';
import PopularMovies from './PopularMovies';
import PopularSeries from './PopularSeries';

const HomeScreen = () => {
 
  return (
    <View>
    <ScrollView>
    <TopFive/>
    <MarvelStudiosMovies/>
    <MarvelStudiosSeries/>
    <SonyMarvel/>
    <FoxMarvel/>
    <PopularMovies/>
    <PopularSeries/>
    <OthersMarvel/>
    </ScrollView>
    </View>
  );
};

export default HomeScreen;