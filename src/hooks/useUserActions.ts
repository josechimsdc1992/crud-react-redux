import { createNewUser, deleteUserById, User, UserId } from "../store/users/slice"
import { useAppDispatch } from "./store"

export const useUserAction=()=>{
    const dispatch=useAppDispatch()

    const addUser=({name,email,github}:User)=>{
        dispatch(createNewUser({name,email,github}))
    }

    const removeUser=(id:UserId)=>{
        dispatch(deleteUserById(id))
    }

    return { removeUser,addUser }

}