import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, FlatList } from "react-native";
import React, { useState } from "react";
import TaskItem from "./src/Components/TaskItem";
import AddTask from "./src/Components/AddTask";
export default function App() {
  const [task, setTask] = useState([]);
  const [ShowModel, setShowModel] = useState(false);
  const addTask = (task) => {
    setTask((prveTask) => [
      ...prveTask,
      { task: task, id: Math.random().toString() },
    ]);
    HideModel();
  };
  const HandleModel = () => {
    setShowModel(true);
  };
  const HideModel = () => {
    setShowModel(false);
  };

  const onClearTask = (id) => {
    setTask((prveTask) => {
      return prveTask.filter((item) => {
        return item.id !== id;
      });
    });
  };
  return (
    <View style={styles.container} animation="slide">
      <AddTask addTask={addTask} visible={ShowModel} HideModel={HideModel} />
      <Button title="Add Task" onPress={HandleModel}></Button>
      <View style={styles.TextView}>
        {task.length > 0 ? (
          <Text style={styles.TaskTitle}>TaskList:</Text>
        ) : (
          <Text style={styles.TaskTitle}>Task List: No</Text>
        )}
      </View>
      <FlatList
        data={task}
        keyExtractor={(item) => item.id}
        renderItem={({ item: task }) => (
          <TaskItem onClearTask={onClearTask} item={task} index={task.id} />
        )}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
    paddingHorizontal: 20,
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
});
