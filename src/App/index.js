
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeStack from '../Screens/HomeStack';
import { DrawerContent } from '../Screens/DrawerContent';

const Drawer = createDrawerNavigator();

export default App = ({navigation}) =>  {
    return (
      <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name="HomeDrawer" component={HomeStack} options={{headerShown:false}} />
      </Drawer.Navigator>
    </NavigationContainer>
    );
  }
