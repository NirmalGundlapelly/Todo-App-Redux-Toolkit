import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {Alert, Keyboard} from 'react-native';

interface Todo{
   id: number
   text: string
}

// basic example slice copied from the docs
const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todoList: [],
    task: '',
  },
  reducers: {

    handleInputChange: (state, action) => {
      state.task = action.payload;
    },

    handleAddTodo: (state:{todoList:Todo[], task:string}) => {
      const {todoList, task} = state;
      if (task !== '') {
        let newTodo = {
          id: todoList.length + 1,
          text: task,
        };
        state.todoList = [...todoList, newTodo];
        state.task = '';
        Keyboard.dismiss();
      }
    },

    handleDelete: (state:{todoList:Todo[]}, action:PayloadAction<number>) => {
      const {todoList} = state;
            let fileteredItems = todoList.filter(
              eachTodo => eachTodo.id != action.payload,
            );
            state.todoList = fileteredItems;
      console.log('action', action)
      // Alert.alert('Delete Todo', 'Are you sure you want to delete?', [
      //   {
      //     text: 'Cancel',
      //     onPress: () => null,
      //     style: 'cancel',
      //   },
      //   {
      //     text: 'YES',
      //     onPress: () => {
      //       const {todoList} = state;
      //       let fileteredItems = todoList.filter(
      //         eachTodo => eachTodo.id != action.payload,
      //       );
      //       state.todoList = fileteredItems;
      //     },
      //   },
      // ]);
    },
  },
});

// destructure actions and reducer from the slice (or you can access as counterSlice.actions)
const {actions, reducer} = todoSlice;

// export individual action creator functions
export const {handleAddTodo, handleInputChange, handleDelete} =
  actions;

// often the reducer is a default export, but that doesn't matter
export default reducer;
