import React, {useState} from 'react';
import {StyleSheet, ScrollView, View, Modal, TouchableWithoutFeedback} from 'react-native';
import {Image, Rating, Text, Card} from 'react-native-elements';

const Movie = (props) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const calcMargin = (i, len) => {
    if (i === 0) {
      return { marginRight: 10 }
    } else if (i === (len - 1)) {
      return { marginLeft: 10 }
    }
    return { marginHorizontal: 10 }
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible)
  };

  const renderView = (title, data) => {
    if (data) {
      return (
        <View style={styles.groupWrapper}>
          <Text style={styles.groupTitle}>{ title }</Text>
          <ScrollView horizontal={true}>
            {
              data.map((item, i) => {
                const image = item.image && item.image.uri ? item.image.uri : '';
                const category = item.category || 'Unknown category';
                const title = item.title || 'Unknown title';
                const rating = item.rating || 0;

                return (
                  <View key={i} style={[styles.movieWrapper, calcMargin(i, data.length)]}>
                    <TouchableWithoutFeedback onPress={toggleModal}>
                      <Image style={styles.movieImage} source={{ uri: image }} />
                    </TouchableWithoutFeedback>
                    <Text style={styles.movieCategory}>{ category }</Text>
                    <Rating
                      readonly
                      fractions={1}
                      type='custom'
                      tintColor="#F2F2F2"
                      ratingBackgroundColor="#EDE0A8"
                      imageSize={24}
                      startingValue={ rating } />
                    <TouchableWithoutFeedback onPress={toggleModal}>
                      <Text style={styles.movieTitle}>{ title }</Text>
                    </TouchableWithoutFeedback>
                  </View>
                )
              })
            }
          </ScrollView>
        </View>
      )
    }

    return (<View/>)
  };

  const renderModal = () => {
    return (
      <TouchableWithoutFeedback onPress={toggleModal}>
        <Modal
          animationType="fade"
          transparent={true}
          presentationStyle="overFullScreen"
          visible={isModalVisible}
        >
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.9)'}}>
            <TouchableWithoutFeedback onPress={() => {}}>
              <Card>
                <Card.Title>HELLO WORLD</Card.Title>
                <Card.Divider/>
                <Card.Image source={{uri: 'https://i.imgur.com/tAui2H7.jpg'}} />
                <Text style={{marginBottom: 10}}>
                  The idea with React Native Elements is more about component structure than actual design.
                </Text>
              </Card>
            </TouchableWithoutFeedback>
          </View>
        </Modal>
      </TouchableWithoutFeedback>
    )
  }

  return (
    <View>
      { renderView('New releases', props.releases) }
      { renderView('You might want to see this',props.suggestions) }
      { renderModal() }
    </View>
  );
};

const styles = StyleSheet.create({
  groupWrapper: {
    fontSize: 24,
    marginHorizontal: 4,
    marginVertical: 12
  },
  groupTitle: {
    fontSize: 24,
    marginBottom: 10
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

export default Movie
