import { useEffect, useState } from "react";
import { ScrollView, Text, StyleSheet, TouchableOpacity } from "react-native";
import TaskCard from "./TaskCard";



export default function TaskList() {
    const [tasks, setTasks] = useState();

    // fetch tasklist in useEffect (run only once)
    useEffect(() => {
        fetch('https://todo-c9-api-bc.web.app/tasks')
            .then(res => res.json())
            .then(setTasks)
            .catch(console.error)
}, [])

    const toggleDone = (task) => {
        console.log(task.tasksID)
        // is task done?
        const done = !!!task.done // true, false, undefined

        // We need to send a patch request to `/tasks/${task.tasksID}`
        // in the body we need to send { done }
        fetch(`https://todo-c9-api-bc.web.app/tasks/${task.tasksID}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ done }), 
        })
            .then(res => res.json())
            .then(setTasks)
            .catch(console.error)
    }
    // return ScrollView with tasklist mapped to TaskCard
    return (
        <ScrollView>
            <Text style={styles.h1}>To Do List</Text>
            {
                !tasks
                ?<Text>loading...</Text>
                 :tasks.map( (element) => (
                    <TouchableOpacity onPress={() => toggleDone(element)} key={element.tasksID}>
                    <TaskCard
                    data={element} />
                    </TouchableOpacity>
                 )
                 )
                
            }
            
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    bg: {
      flex: 1,
      justifyContent: "center",
    },

    h1: {
        fontSize: 30,
        fontWeight: "700",
        display: "flex",
        textAlign: "center"
    }
  });
  