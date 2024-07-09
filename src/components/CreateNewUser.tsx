import { Badge,Button,Card,TextInput,Title } from "@tremor/react";
import { useUserAction } from "../hooks/useUserActions"
import { useState } from "react";

export function CreateNewUser(){
    const { addUser }=useUserAction()
    const [result,setResult]=useState<'OK' | 'ERROR' | null>(null)
    const handleSumbmit=(event:React.FormEvent<HTMLFormEvent>)=>{
        event.preventDefault()
        setResult(null)
        const form=event.target
        const formData=new FormData(form)

        const name=formData.get('name') as string
        const email=formData.get('email') as string
        const github=formData.get('github') as string

        if(name==='' || email==='' || github===''){
            return setResult('ERROR')
        }

        addUser({name,email,github})
        setResult('OK')
        form.reset()
    }
    return (
        <Card style={{marginTop:'16px'}}>
            <Title>
                Create New User
            </Title>
            <form className="" onSubmit={handleSumbmit}>
                <TextInput name="name" placeholder="write the name"></TextInput>
                <TextInput name="email" placeholder="write the email"></TextInput>
                <TextInput name="github" placeholder="write the user github"></TextInput>
                <div>
                    <Button type="submit" style={{marginTop:'16px'}}>Save</Button>
                    <span>
                        {result==='OK' && <Badge color='green'>Guardado Correctamente</Badge>}
                        {result==='ERROR' && <Badge color='red'>Error en los campos</Badge>}
                    </span>
                </div>
            </form>
        </Card>
    )
}