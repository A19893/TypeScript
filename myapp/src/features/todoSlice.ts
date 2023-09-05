import {PayloadAction, createSlice} from '@reduxjs/toolkit'

type List={
    name: string
}

type initialStateType ={
 todoList:List[],
 language: string
}

const initialState:initialStateType={
todoList:[],
language:"en"
}

const todoSlice=createSlice({
    name: 'Todo List',
    initialState: initialState,
    reducers: {
     addTodo:(state,action:PayloadAction<string>)=>{
      state.todoList.push({name:action.payload})
     },
     removeTodo:()=>{
       console.log("called")
     },
     changeLanguage:(state,action:PayloadAction<string>)=>{
      state.language=action.payload;
     }
    }
})
export const {addTodo,removeTodo,changeLanguage}=todoSlice.actions
export default todoSlice.reducer