import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";

import AppNavigator from "./app/navigation/AppNavigator";
import navigationTheme from "./app/navigation/navigationTheme";

import ImageInputList from "./app/components/ImageInput";
import Screen from "./app/components/Screen";
import ListingEditScreen from "./app/screens/ListingEditScreen";

export default function App() {
 

  return (
    // <NavigationContainer theme={navigationTheme}>
    //   <AppNavigator />
    // </NavigationContainer>
    <ListingEditScreen />
  );
}
