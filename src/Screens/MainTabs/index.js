
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect,useContext } from 'react';
import { Animated, Dimensions, Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import home from "../../../assets/home.png"
import { FontAwesome5 } from '@expo/vector-icons'
import { useRef } from 'react';
import { DrawerActions } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Context } from '../../store';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Tab = createBottomTabNavigator();

const App = (props) => {
  const { navigation } = props;
  const [state, setstate] = useState(true)
  const [line, setline] = useState(false)
  const [leftPercentage, setleftPercentage] = useState("0%")

  const tabOffsetValue = useRef(new Animated.Value(0)).current;

  return (
    <>
      <StatusBar backgroundColor={"green"} />

      <Tab.Navigator
        initialRouteName='Dashboard'
        tabBarOptions={{
          showLabel: false,
          style: {
            backgroundColor: 'white',
            position: 'absolute',
            bottom: 20,
            marginHorizontal: 20,
            height: 60,
            borderRadius: 10,
            shadowColor: '#000',
            shadowOpacity: 0.06,
            shadowOffset: {
              width: 10,
              height: 10
            },
            paddingHorizontal: 20,
          }
        }}>



        <Tab.Screen name={"Employee"} component={EmployeeScreen} options={{
          headerStyle: {
            backgroundColor: "green",
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerLeft: () => (
            <Text
              onPress={() =>
                navigation.dispatch(DrawerActions.openDrawer())
              }
            >
              {' '}
              <Icon name="menu" size={25} color={"#fff"} />
            </Text>
          ),
          tabBarIcon: ({ focused }) => (
            <View style={{
              position: 'absolute',
              top: 20
            }}>
              <FontAwesome5
                name="user-tie"
                size={20}
                style={{ top: Platform.OS === "ios" ? 8 : -7 }}
                color={focused ? "green" : "#000"}
              ></FontAwesome5>
            </View>
          )
        }} listeners={({ navigation, route }) => ({
          tabPress: e => {
            setstate(false)
            setline(false)
            setleftPercentage("9%")
            Animated.spring(tabOffsetValue, {
              toValue: getWidth(),
              useNativeDriver: true
            }).start();
          }
        })}></Tab.Screen>



        <Tab.Screen name={"Dashboard"} component={Mainscreen}
          listeners={({ navigation, route }) => ({
            tabPress: e => {
              setline(true)
              Animated.spring(tabOffsetValue, {
                toValue: getWidth() * 2,
                useNativeDriver: true
              }).start();
            }
          })} options={{
            headerStyle: {
              backgroundColor: "green",
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerLeft: () => (
              <Text
                onPress={() =>
                  navigation.dispatch(DrawerActions.openDrawer())
                }
              >
                {' '}
                <Icon name="menu" size={25} color={"#fff"} />
              </Text>
            ),
            tabBarIcon: ({ focused }) => (

              <View style={{
                width: 55,
                height: 55,
                backgroundColor: focused ? "green" : "#000",
                borderRadius: 30,
                justifyContent: 'center',
                alignItems: 'center',
                top: -20
              }}>
                <Image source={home} style={{
                  width: 22,
                  height: 22,
                  tintColor: 'white',
                }}></Image>
              </View>
            )
          }}
        ></Tab.Screen>


        <Tab.Screen name={"Attandance"} component={AttendanceScreen} options={{
          headerStyle: {
            backgroundColor: "green",
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerLeft: () => (
            <Text
              onPress={() =>
                navigation.dispatch(DrawerActions.openDrawer())
              }
            >
              {' '}
              <Icon name="menu" size={25} color={"#fff"} />
            </Text>
          ),
          tabBarIcon: ({ focused }) => (
            <View style={{
              position: 'absolute',
              top: 20
            }}>
              <FontAwesome5
                name="vote-yea"
                size={20}
                style={{ top: Platform.OS === "ios" ? 8 : -7 }}
                color={focused ? "green" : "#000"}
              ></FontAwesome5>
            </View>
          )
        }} listeners={({ navigation, route }) => ({
          tabPress: e => {
            setline(false)
            setstate(false)
            setleftPercentage("18%")
            Animated.spring(tabOffsetValue, {
              toValue: getWidth() * 3,
              useNativeDriver: true
            }).start();
          }
        })}></Tab.Screen>


      </Tab.Navigator>

    </>
  );
}

function getWidth() {
  let width = Dimensions.get("window").width

  width = width - 80

  return width / 5
}


function Mainscreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Dashboard</Text>
    </View>
  );
}

function AttendanceScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Attendamce</Text>
    </View>
  );
}

function EmployeeScreen() {
  
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>EmployeeScreen</Text>
    </View>
  );
}

export default App;

