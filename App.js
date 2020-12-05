import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// import { createDrawerNavigator } from "@react-navigation/drawer";

// import Main from "./screens/Main";
// import { DrawerScreens } from './screens/DrawerScreens'
import SplashScreen from './screens/SplashScreen';
import Login from './screens/Login';
import SignUp from './screens/SignUp'
import Main from './screens/Main'
import Chat from './screens/Chat'


// const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const App = (navigation) => {
  return (
    <NavigationContainer>
      {/* //   <Drawer.Navigator drawerContents={props => <DrawerScreens {...props} />}>
    //     <Drawer.Screen name="DrawerScreens" component={DrawerScreens} />
    //     <Drawer.Screen name="HomeDrawer" component={SplashScreen} />
    //   </Drawer.Navigator> */}

      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Chat" component={Chat} />
      </Stack.Navigator>

    </NavigationContainer >

  );
};

export default App;
