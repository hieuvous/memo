import { StyleSheet, TouchableOpacity, GestureResponderEvent } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

type BackButtonProps = {
  onPress?: (event: GestureResponderEvent) => void;
};

const BackButton: React.FC<BackButtonProps> = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Ionicons name="chevron-back" size={28} color="black" />
    </TouchableOpacity>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
