import {
  View,
  Text,
  Image,
  TextInput,
  Alert,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { styles } from "./styles";
import { Logo } from "../components/logo";
import { Task } from "../components/task";
import { useState } from "react";
import React from "react";

export function Home() {
  type Task = {
    content: string;
    done: boolean;
  };
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskName, setTaskContent] = useState("");

  function handleAddTask() {
    if (taskName === "") {
      return Alert.alert(
        "Tarefa inválida",
        "Não é possível cadastrar uma tarefa vazia!"
      );
    }

    setTasks((prevState) => [...prevState, { content: taskName, done: false }]);
    setTaskContent("");
  }

  function handleRemoveTask(taskToRemove: Task) {
    console.log(taskToRemove);
    Alert.alert("Remover", `Remover a tarefa ${taskToRemove.content}?`, [
      {
        text: "Sim",
        onPress: () =>
          setTasks((prevState) =>
            prevState.filter((task) => task !== taskToRemove)
          ),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }

  function handleCheckTask(taskToCheck: Task) {
    setTasks((prevState) =>
      prevState.map((task) =>
        task === taskToCheck ? { ...task, done: !task.done } : task
      )
    );
  }

  return (
    <View style={styles.container}>
      <Logo />
      <View style={styles.form}>
        <TextInput
          style={styles.textInput}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#808080"
          onChangeText={setTaskContent}
          value={taskName}
        />
        <TouchableOpacity onPress={handleAddTask} style={styles.button}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.listHeader}>
        <View style={styles.listHeader}>
          <Text style={styles.createdText}>Criadas</Text>
          <Text style={styles.numberBox}>{tasks.length}</Text>
        </View>
        <View style={styles.listHeader}>
          <Text style={styles.doneText}>Concluidas</Text>
          <Text style={styles.numberBox}>
            {tasks.filter((task) => task.done).length}
          </Text>
        </View>
      </View>

      <FlatList
        data={tasks.sort((a, b) => {
          if (a.done === b.done) {
            return a.content.localeCompare(b.content);
          }
          return a.done ? 1 : -1;
        })}
        keyExtractor={(item) => item.content}
        renderItem={({ item }) => (
          <Task
            content={item.content}
            onRemove={() => handleRemoveTask(item)}
            onCheck={() => handleCheckTask(item)}
            done={item.done}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <View style={styles.noTasks}>
            <Image
              source={require("../images/clipboard.png")}
              style={styles.clipboardImage}
            />
            <Text style={styles.noTasksTitle}>
              Você ainda não tem tarefas cadastradas
            </Text>
            <Text style={styles.noTasksText}>
              Crie tarefas e organize seus itens a fazer
            </Text>
          </View>
        )}
      />
    </View>
  );
}
