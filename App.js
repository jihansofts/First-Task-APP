import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, Button, View } from "react-native";
import React, { useState } from "react";
import Test from "./src/Test";
export default function App() {
  const [task, setTask] = useState([]);
  const [input, setInput] = useState("");

  const HandleInput = (e) => {
    setInput(e);
  };
  const addTask = () => {
    if (input !== "") {
      setTask([...task, input]);
      setInput("");
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.InputItem}>
        <TextInput
          value={input}
          onChangeText={HandleInput}
          style={styles.InputStyle}
          placeholder="Enter Task"></TextInput>
        <Button onPress={addTask} title="Add Tak"></Button>
      </View>
      <View style={styles.TextView}>
        <Text style={styles.TaskTitle}>TaskList:</Text>
        <View>
          {task?.map((item, index) => (
            <Text key={index} style={styles.TextItem}>
              {item}
            </Text>
          ))}
          <Button
            style={{
              backgroundColor: "#00A884",
              color: "white",
              padding: 10,
              borderRadius: 5,
            }}
            onPress={() => setTask([])}
            title="Clear">
            Clear
          </Button>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
  2;
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
    paddingHorizontal: 20,
  },
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
  TextView: {
    margin: 10,
    borderTopColor: "#000000",
    borderTopWidth: 1,
  },
  TaskTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#00A884",
  },
  TextItem: {
    marginTop: 10,
    backgroundColor: "#00A884",
    color: "white",
    padding: 10,
    borderRadius: 5,
  },
});
