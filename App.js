import React, { useState } from 'react';
import { SafeAreaView, } from 'react-native';
import ToDoForm from './app/toDoForm';
import ToDoList from './app/toDoList';


function App() {
  const [tasks, SetTasks] = useState(['Do laundry', 'Go to gym', 'Walk dog']);
  return (
    <SafeAreaView>
      <ToDoList tasks={tasks} />
      <ToDoForm />
    </SafeAreaView>
  );
}

export default App;
//you just need to chuck npx expo start -c in the terminal to start