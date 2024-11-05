import { Button, StyleSheet, Text, TextInput, View } from "react-native"
import useTodosStore from "../store/todosStore";
import { useEffect, useState } from "react";

const TodoLists=()=>{
    useEffect(()=>{
        fetchTodos();
    },[fetchTodos]);
    
    const {todos,fetchTodos,addTodo} = useTodosStore();
    const [title,setTitle] = useState("");
    const handleAddTodo=()=>{
        let newItem = {
            "userId": 1,
            title,
            "completed": false
        }
        addTodo(newItem);
        console.log(todos);
    }

    return(
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text>TodoLists</Text>
            <TextInput style={styles.input} onChangeText={(val)=>setTitle(val)}  />
            <Button title="Add Todo Item" onPress={()=>handleAddTodo()} />

                <View>
                    {
                        todos.map((item,index)=>{
                            return(
                                <View key={item.index}>
                                    <Text>{item.title}</Text>
                                </View>

                            )
                        })
                    }
                </View>
        </View>
    )
}
export default TodoLists;

const styles = StyleSheet.create({
    input: {
        width:'100%',
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });