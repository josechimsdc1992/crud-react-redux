import { configureStore,type Middleware } from "@reduxjs/toolkit";
import usersReducer, { rollbackUser } from './users/slice'
import { toast } from "sonner";

const persistanceLocalStorageMiddleware:Middleware = (store) => (next) => (action) => {
    next(action)
    localStorage.setItem("__redux__state__",JSON.stringify(store.getState()))
}

const syncWithDatabaseMiddleware:Middleware=(store)=>(next)=>(action)=>{
    const previousState=store.getState()
    const {type,payload}=action
    next(action)
    if(type==='users/deleteUserById'){
        const userRemoved=previousState.users.find(user=>user.id===payload)
        fetch(`https://jsonplaceholder.typicode.co/users/${payload}`,{
            method:'DELETE'
        })
        .then(res=>{
            if(res.ok){
                toast.success('Usuario eliminado correctamente')
            }
            throw new Error('Error al eliminar un usuario')
        })
        .catch(()=>{
            toast.error(`Error al eliminar un usuario ${userRemoved.id}`)
            if(userRemoved){
                store.dispatch(rollbackUser(userRemoved))
            }
            console.log('error')
        })
    }
}

export const store=configureStore({
    reducer:{
        users:usersReducer
    },
    middleware:(getDefaultMiddleware) => {

        return getDefaultMiddleware().concat(persistanceLocalStorageMiddleware,syncWithDatabaseMiddleware)
      },
})

export type RootState=ReturnType<typeof store.getState>
export type AppDispatch=typeof store.dispatch