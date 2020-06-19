import React from "react";
import { StyleSheet, View, Image } from "react-native";

import AppText from "./AppText";
import colors from "../config/colors";

function ListItem({ title, subTitle, picture }) {
  return (
    <View style={styles.container}>
      <Image style={styles.picture} source={picture} />
      <View>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  picture: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  subTitle: {
    color: colors.medium,
  },
  title: {
    fontWeight: "500",
  },
});

export default ListItem;
