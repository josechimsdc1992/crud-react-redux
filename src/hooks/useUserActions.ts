import { deleteUserById, UserId } from "../store/users/slice"
import { useAppDispatch } from "./store"

export const useUserAction=()=>{
    const dispatch=useAppDispatch()

    const removeUser=(id:UserId)=>{
        dispatch(deleteUserById(id))
    }

    return { removeUser }

}