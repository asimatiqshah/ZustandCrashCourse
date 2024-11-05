import { create } from "zustand";
import axios from 'axios';
const todosStore=(set)=>({
    todos:[],
    fetchTodos: async()=>{
      try {
        let result = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5');
        set((state)=>({
            todos:result.data,
        }))
      } catch (error) {
        console.log(error,"Failed To Fetch Data");
      }
    },
    addTodo: async(todoNewItem)=>{
        try {
            let result = await axios.post('https://jsonplaceholder.typicode.com/todos',todoNewItem);  
        } catch (error) {
            console.log(error,"Failed To Add Item");
        }
    }
})

const useTodosStore = create(todosStore);
export default useTodosStore;