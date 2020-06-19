import React from "react";
import {
  StyleSheet,
  FlatList,
  SafeAreaView,
} from "react-native";
import Constants from "expo-constants";

import ListItem from "../components/ListItem";

const messages = [
  {
    id: 1,
    title: "Item1",
    description: "This is the 1st item",
    picture: require("../assets/coding.jpg"),
  },
  {
    id: 2,
    title: "Item2",
    description: "This is the 2nd item",
    picture: require("../assets/coding.jpg"),
  },
];

function MessagesScreen(props) {
  return (
    <SafeAreaView style={styles.screen}>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            description={item.description}
            picture={item.picture}
          />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    marginTop: Constants.statusBarHeight,
  },
});

export default MessagesScreen;
