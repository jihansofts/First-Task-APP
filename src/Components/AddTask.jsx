import { View, TextInput, Button, StyleSheet } from "react-native";
import React, { useState } from "react";
export default function AddTask({ addTask }) {
  const [input, setInput] = useState("");
  const HandleButton = () => {
    if (input !== "") {
      addTask(input);
      setInput("");
    }
  };
  return (
    <View style={styles.InputItem}>
      <TextInput
        value={input}
        onChangeText={setInput}
        style={styles.InputStyle}
        placeholder="Enter Task"></TextInput>
      <Button onPress={HandleButton} title="Add Tak"></Button>
    </View>
  );
}
const styles = StyleSheet.create({
  InputItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  InputStyle: {
    width: "70%",
    borderWidth: 1,
    borderColor: "#00A884",
    borderRadius: 5,
    padding: 5,
    paddingLeft: 20,
  },
});
