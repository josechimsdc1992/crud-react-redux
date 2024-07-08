import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { store } from "..";

const DEFAULT_STATE=[
    {
        id: '1',
        name: 'Yazman Rodriguez',
        email: 'yazmanito@gmail.com',
        github: 'yazmanito',
    },
    {
        id: '2',
        name: 'Leonardo',
        email: 'leo@gmail.com',
        github: 'leo',
    },
    {
        id: '3',
        name: 'Haakon Dahlberg',
        email: 'haakon@gmail.com',
        github: 'hhakon',
    },
]

export interface User{
    name:string,
    email:string,
    github:string
}

export type UserId=string

export interface userWithId extends User{
    id:UserId
}

const initialState:userWithId[]=(()=>{
    const persistedState=localStorage.getItem("__redux__state__")
    if(persistedState){
        return JSON.parse(persistedState).users
    }
    return DEFAULT_STATE
})()

export const userSlice=createSlice({
    name:'users',
    initialState,
    reducers:{
        deleteUserById:(state,action:PayloadAction<UserId>)=>{
            const id=action.payload
            return state.filter((user)=>user.id!=id)
        }
    }
})

export default userSlice.reducer
export const { deleteUserById }=userSlice.actions