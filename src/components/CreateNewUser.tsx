import { Button,Card,TextInput,Title } from "@tremor/react";
import { useUserAction } from "../hooks/useUserActions"

export function CreateNewUser(){
    const { addUser }=useUserAction()
    const handleSumbmit=(event:React.FormEvent<HTMLFormEvent>)=>{
        event.preventDefault()
        const form=event.target
        const formData=new FormData(form)

        const name=formData.get('name') as string
        const email=formData.get('email') as string
        const github=formData.get('github') as string

        addUser({name,email,github})
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
                </div>
            </form>
        </Card>
    )
}