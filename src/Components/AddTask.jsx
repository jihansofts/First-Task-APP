import { View, TextInput, Button, Modal, StyleSheet } from "react-native";
import React, { useState } from "react";
export default function AddTask({ addTask, HideModel, visible }) {
  const [input, setInput] = useState("");
  const HandleButton = () => {
    if (input !== "") {
      addTask(input);
      setInput("");
    }
  };
  return (
    <Modal animationType="slide" visible={visible}>
      <View style={styles.InputContainer}>
        <TextInput
          value={input}
          onChangeText={setInput}
          style={styles.InputStyle}
          placeholder="Enter Task"></TextInput>
        <View style={styles.BtnGroup}>
          <View style={styles.Btn}>
            <Button onPress={HandleButton} title="Add Task"></Button>
          </View>
          <View style={styles.Btn}>
            <Button onPress={HideModel} title="CANCEL"></Button>
          </View>
        </View>
      </View>
    </Modal>
  );
}
const styles = StyleSheet.create({
  InputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  InputStyle: {
    width: "70%",
    borderWidth: 1,
    borderColor: "#00A884",
    borderRadius: 5,
    padding: 5,
    paddingLeft: 20,
  },
  BtnGroup: {
    flexDirection: "row",
    gap: 10,
    marginTop: 10,
  },
  Btn: {
    cursor: "pointer",
  },
});
