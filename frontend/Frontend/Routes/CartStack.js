/* eslint-disable */
import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Cart from "../src/Cart/Cart";
import CartPage2 from "../src/Cart/CartPage2/CartPage2";
import OrderConfirm from "../src/Cart/CartPage3/OrderConfirmed";
import OrderStack from "./OrderStack";

const Stack = createStackNavigator();

const CartStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="CartPage2" component={CartPage2} />
      <Stack.Screen name="OrderConfirm" component={OrderConfirm} />
      <Stack.Screen name="My Orders" component={OrderStack} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
};

export default CartStack;
