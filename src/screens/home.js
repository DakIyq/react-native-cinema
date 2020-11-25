import React from 'react';
import Header from '../layouts/header'
import { StyleSheet, ScrollView, Text, View} from 'react-native';
import { Image } from 'react-native-elements';
import Movie from 'react-native-movie';
import data from '../../assets/data';

export default function Home() {
  const cinemas = data.cinemas;
  const releases = data.releases;
  const suggestions = data.suggestions;
  const calcMargin = (i, len) => {
    if (i === 0) {
      return { marginRight: 10 }
    } else if (i === (len - 1)) {
      return { marginLeft: 10 }
    }
    return { marginHorizontal: 10 }
  }

  return (
    <ScrollView style={{backgroundColor: 'transparent', marginBottom: 55}}>
      <Header />

      <View style={styles.group}>
        <Text style={styles.groupTitle}>Cinemas around you</Text>
        <ScrollView horizontal={true}>
          {
            cinemas.map((item, i) => (
              <View key={i} style={[styles.cinemaWrapper, calcMargin(i, cinemas.length)]}>
                <Image style={styles.cinemaImage} source={{ uri: item.image.uri }}>
                  <View style={styles.cinemaOverlay}/>
                  <Text style={styles.cinemaName}>{item.name}</Text>
                </Image>
              </View>
            ))
          }
        </ScrollView>
      </View>

      <Movie releases={releases} suggestions={suggestions} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  group: {
    fontSize: 24,
    marginHorizontal: 4,
    marginVertical: 12
  },
  groupTitle: {
    fontSize: 24,
    marginBottom: 10
  },

  cinemaWrapper: {
      height: 100,
      width: 130,
      borderRadius: 15,
      overflow : "hidden"
  },
  cinemaOverlay: {
    position: 'absolute',
    width: "100%",
    height: "100%",
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
  },
  cinemaImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    justifyContent: "center",
  },
  cinemaName: {
    color: 'white',
    fontSize: 24,
    textAlign: 'center',
  },


  movieWrapper: {
    width: 150,
    overflow : "hidden",
  },
  movieImage: {
    width: 150,
    height: 150,
    resizeMode: "cover",
    justifyContent: "center",
    borderRadius: 15,
  },
  movieCategory: {
    color: 'black',
    fontSize: 12,
    textAlign: 'center',
  },
  movieTitle: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold'
  },
});
