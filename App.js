import React, { useState } from "react";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import Screen from "./app/components/Screen";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Cameras", value: 3 },
];

export default function App() {
  const [category, setCategory] = useState(categories[0]);
  return (
    <Screen>
      <AppPicker
        icon="apps"
        items={categories}
        onSelectItem={(item) => setCategory(item)}
        placeholder="Category"
        selectedItem={category}
      />
      <AppTextInput placeholder="Email" icon="email" />
    </Screen>
  );
}
