import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Main from "./screens/Main";

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Main">
        {/* <Drawer.Screen name="Splash" component={SplashStackScreen} /> */}
        <Drawer.Screen name="Home" component={Main} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
