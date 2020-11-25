import React from 'react';
import { StyleSheet, Dimensions, View} from 'react-native';
import { Input, Icon, Avatar, Image } from 'react-native-elements';
import Svg, { Path } from 'react-native-svg';

export default function Header() {
  const aspectRatio = 16.32661901336231;
  const width = Dimensions.get("window").width;

  return (
    <View>
      <View style={styles.header}>
        <View style={styles.headerButton}>
          <Icon
            name='menu'
            size={36}
            color='white'
          />
          <Avatar
            rounded
            source={{ uri: 'https://i.pravatar.cc/150?u=a042581f4e29026704d', }}
          />
        </View>
      </View>

      <View style={styles.search}>
        <View style={{...styles.searchCurve, width, aspectRatio }}>
          <Svg
            width='100%'
            height='100%'
            viewBox='0 0 800 48'
          >
            <Path
              fill="#d85a42"
              fill-opacity="1"
              d="M.2 2.7C.5 5.9.2 5.8 37 13.4c82.2 17 174.2 27.3 284.5 31.6 32.3 1.3 132.7 1.3 165 0 120.6-4.7 212.5-15.7 310-36.9 2.6-.6 3-1.2 3.3-4.4l.3-3.7H-.1l.3 2.7z"
            />
          </Svg>
        </View>

        <View style={styles.searchInput}>
          <Input
            inputContainerStyle={{borderBottomWidth:0}}
            placeholder='Search movie title'
            leftIcon={
              <Icon
                name='search'
                size={24}
                color='black'
              />
            }
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: '#d85a42',
    height: 80
  },
  headerButton: {
    alignSelf: 'center',
    width: Dimensions.get('window').width - 50,
    flexDirection: "row",
    justifyContent: "space-between",
  },


  search: {
    flexDirection: "column",
    justifyContent: "center",
    height: 50
  },
  searchCurve: {
    position: "absolute",
    top: -1,
  },
  searchInput: {
    alignSelf: 'center',
    backgroundColor: 'white',
    width: Dimensions.get('window').width - 50,
    height: 50,
    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 25,
  }
});
