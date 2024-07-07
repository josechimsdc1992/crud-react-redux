import { createSlice } from "@reduxjs/toolkit";

export interface User{
    name:string,
    email:string,
    github:string
}

export interface userWithId extends User{
    id:string
}

const initialState:userWithId[]=[
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

export const userSlice=createSlice({
    name:'users',
    initialState,
    reducers:{}
})

export default userSlice.reducer