import React, { useState } from "react";
import { StyleSheet, FlatList, SafeAreaView, View } from "react-native";

import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import ListItemSeparator from "../components/ListItemSeparator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";

const initialMessages = [
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
  const [messages, setMessages] = useState(initialMessages);

  const handleDelete = (message) => {
    //Delete the message from messages
    setMessages(messages.filter((m) => m.id !== message.id));

    //Call the server
  };
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            description={item.description}
            picture={item.picture}
            onPress={() => console.log("List Item selected", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default MessagesScreen;
