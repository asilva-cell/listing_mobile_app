import React from "react";
import { StyleSheet, View } from "react-native";

import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function NewListingButton({onPress}) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View >
        <MaterialCommunityIcons
          name="plus-circle"
          color={colors.white}
          size={40}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.primary,
    borderColor: colors.white,
    borderRadius: 35,
    borderWidth: 10,
    bottom: 20,
    height: 70,
    justifyContent: "center",
    width: 70,
  },
});
