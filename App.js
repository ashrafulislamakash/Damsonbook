import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

// import Main from "./screens/Main";
import { DrawerScreens } from './screens/DrawerContent'
import SplashScreen from './screens/SplashScreen'


const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContents={props => <DrawerScreens {...props} />}>
        {/* <Drawer.Screen name="Splash" component={SplashStackScreen} /> */}
        <Drawer.Screen name="HomeDrawer" component={SplashScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
