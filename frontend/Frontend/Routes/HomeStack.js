/* eslint-disable */
import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../src/Catgories/Home/Home";
import Header from "../src/Header";
import Catelogue from "../src/Catgories/Catelogue";
import Product from "../src/ProductDescription/ProductPage";
import Profile from "../src/Profile/ProfilePage";

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: () => <Header />,
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Categories"
        component={Home}
        options={{ headerShown: true }}
      />
      <Stack.Screen name="Catelogue" component={Catelogue} />
      <Stack.Screen name="Product" component={Product} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

export default HomeStack;
