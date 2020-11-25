import React from 'react';
import { StyleSheet, TouchableOpacity, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';
import Svg, { Path } from "react-native-svg";
import HomeScreen from '../screens/home'
import EmptyScreen from '../screens/empty'

const Tab = createBottomTabNavigator();

export default function Panel() {
    const tabBar = (props) => (
        <View style={styles.tabBar}>
            <BottomTabBar
                {...props}
            />
        </View>
    );

    const tabBarOptions = () => ({
        showIcon: true,
        style: styles.tabBarNavigator,
        tabStyle: {
            backgroundColor: '#fff'
        },
        activeTintColor: '#E94F37',
        inactiveTintColor: 'gray',
    });

    const tabBarIcon = (event, name, type = "material-community") => {
        return (
            <Icon type={type} name={name} size={36} color={event.color} />
        )
    };

    const tabBarButton = (event, name) => {
        const tabOnPress = () => {
        };

        return (
            <View>
                <Svg width={75} height={61} viewBox="0 0 75 61" >
                    <Path fill="#fff" d="M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z" />
                </Svg>
                <TouchableOpacity onPress={tabOnPress} style={styles.tabBarButton}>
                    <Icon type="material-community" name={name} size={26} color='white' />
                </TouchableOpacity>
            </View>
        )
    };

    return(
        <NavigationContainer>
            <Tab.Navigator tabBar={(props) => tabBar(props)} tabBarOptions={tabBarOptions()} initialRouteName="home" >
                <Tab.Screen
                    name="home"
                    component={HomeScreen}
                    options={{
                        tabBarIcon: (event) => tabBarIcon(event, "home"),
                        tabBarLabel: "HOME"
                    }}
                />
                <Tab.Screen
                    name="tickets"
                    component={EmptyScreen}
                    options={{
                        tabBarIcon: (event) => tabBarIcon(event, "ticket"),
                        tabBarLabel: "TICKETS"
                    }}
                />
                <Tab.Screen
                    name="about"
                    component={EmptyScreen}
                    options={{
                        tabBarButton: (event) => tabBarButton(event, "forum-outline")
                    }}
                />
                <Tab.Screen
                    name="movies"
                    component={EmptyScreen}
                    options={{
                        tabBarIcon: (event) => tabBarIcon(event, "play-circle-outline"),
                        tabBarLabel: "MOVIES"
                    }}
                />
                <Tab.Screen
                    name="cinemas"
                    component={EmptyScreen}
                    options={{
                        tabBarIcon: (event) => tabBarIcon(event, "theater"),
                        tabBarLabel: "CINEMAS"
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    tabBar: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22
    },
    tabBarNavigator: {
        borderTopWidth: 0,
        backgroundColor: 'transparent',
        elevation: 30
    },
    tabBarButton: {
        position: 'absolute',
        top: -22.5,
        left: 12,
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        height: 50,
        borderRadius: 27,
        backgroundColor: '#E94F37',
    },
});
