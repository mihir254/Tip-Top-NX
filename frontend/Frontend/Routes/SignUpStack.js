import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SignUp from "../src/SignUp/SignUp";
import SignIn from "../src/SignIn/SignIn";
import OtpMobile from "../src/SignUp/OtpMobile";

const Stack = createStackNavigator();

const SignUpStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Sign In" component={SignIn} />
      <Stack.Screen name="Sign Up" component={SignUp} />
      <Stack.Screen name="Otp Mobile" component={OtpMobile} />
    </Stack.Navigator>
  );
};

export default SignUpStack;
