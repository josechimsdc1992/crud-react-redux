// 'use client';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeaderCell,
    TableRow,
    Card,
    Title,
    Badge
  } from '@tremor/react';
  import { useAppSelector } from '../hooks/store';
import { useUserAction } from '../hooks/useUserActions';


  
  export default function ListOfUsers() {
    const users=useAppSelector((state)=>state.users)
    const { removeUser }=useUserAction()
    return (
      <>
        <div className="sm:flex sm:items-center sm:justify-between sm:space-x-10">
          <div>
            <h3 className="font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
              Users
            </h3>
            <p className="mt-1 text-tremor-default leading-6 text-tremor-content dark:text-dark-tremor-content">
              Overview of all registered Users within your organization.
            </p>
          </div>
          <button
            type="button"
            className="mt-4 w-full whitespace-nowrap rounded-tremor-small bg-tremor-brand px-4 py-2.5 text-tremor-default font-medium text-tremor-brand-inverted shadow-tremor-input hover:bg-tremor-brand-emphasis dark:bg-dark-tremor-brand dark:text-dark-tremor-brand-inverted dark:shadow-dark-tremor-input dark:hover:bg-dark-tremor-brand-emphasis sm:mt-0 sm:w-fit"
          >
            Add user
          </button>
        </div>
        <Card>
          <Title>
            Usuarios
            <Badge style={{marginLeft:'5px'}}>{users.length}</Badge>
          </Title>
          <Table className="mt-8">
          <TableHead>
            <TableRow className="border-b border-tremor-border dark:border-dark-tremor-border">
              <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
                Id
              </TableHeaderCell>
              <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
                Name
              </TableHeaderCell>
              <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
                Email
              </TableHeaderCell>
              <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
                Acciones
              </TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
                    {item.id}
                  {item.name}
                </TableCell>
                <TableCell className="font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
                    <img src={`https://unavatar.io/github/${item.github}`} alt={item.name} style={{width:'32px',height:'32px'}}></img>
                  {item.name}
                </TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>
                    <button type='button' style={{width:'24px',height:'24px'}}>
                    <svg aria-label='editar' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                    </svg>
                    </button>
                    <button type='button' style={{width:'24px',height:'24px'}} onClick={()=>{removeUser(item.id)}}>
                    <svg aria-label='eliminar' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9.75 14.25 12m0 0 2.25 2.25M14.25 12l2.25-2.25M14.25 12 12 14.25m-2.58 4.92-6.374-6.375a1.125 1.125 0 0 1 0-1.59L9.42 4.83c.21-.211.497-.33.795-.33H19.5a2.25 2.25 0 0 1 2.25 2.25v10.5a2.25 2.25 0 0 1-2.25 2.25h-9.284c-.298 0-.585-.119-.795-.33Z" />
                    </svg>
                    </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        </Card>
        
      </>
    );
  }