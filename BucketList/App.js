import { Keyboard, KeyboardAvoidingView, Platform, TextInput, TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import Task from './Task';
import { useState } from 'react';

export default function App() {
  const [task, setTask] = useState()
  const [taskItems, setTaskItems] = useState([])

    const handleAddTask = () =>{
        Keyboard.dismiss()
        setTaskItems([...taskItems, task])
        setTask(null)
        console.log(task)
    }

    const deleteTask = (index) =>{
      let copiedItems = [...taskItems]
      copiedItems.splice(index, 1)
      setTaskItems(copiedItems)
    }

  return (
    <View style={styles.container}>
      {/*today's tasks */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's Tasks</Text>

        <View style={styles.items}>
          {/*this is where the tasks will go */}
           
          {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity key={index} onPress={() => deleteTask(index)}>
                  <Task text={item} />
                </TouchableOpacity>
              ) 
            })
          }
        </View>
      </View>

      {/*adding tasks */}
      <KeyboardAvoidingView behavior={Platform.OS ==="ios" ? "padding" : "height"} style={styles.addTaskWrapper}>
        <TextInput style={styles.input} placeholder={"Write a task"} value={task} onChangeText={text => setTask(text)}/>
      
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8eaed',
  },
  tasksWrapper:{
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle:{
    fontSize: 24,
    fontWeight: 'bold',
  },
  items:{
    marginTop: 30,
  },
  addTaskWrapper:{
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input:{
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    borderRadius: 60,
    borderColor: '#c0c0c0',
    borderWidth: 1,
    width: 250
  },
  addWrapper:{
    width: 60,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#c0c0c0',
    borderWidth: 1,
  },
  addText:{

  }

});
