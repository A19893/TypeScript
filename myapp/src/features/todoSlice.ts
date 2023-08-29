import {PayloadAction, createSlice} from '@reduxjs/toolkit'

type List={
    name: string
}

type initialStateType={
 todoList:List[]
}

const initialState:initialStateType={
todoList:[]
}

const todoSlice=createSlice({
    name: 'Todo List',
    initialState: initialState,
    reducers: {
     addTodo:(state,action:PayloadAction<string>)=>{
      state.todoList.push({name:action.payload})
     },
     removeTodo:(state,action)=>{
       console.log("called")
     }
    }
})
export const {addTodo,removeTodo}=todoSlice.actions
export default todoSlice.reducer