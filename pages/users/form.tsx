import React, { useState} from "react";
import { useCreateUsersMutation } from "src/graphql/generated/graphql";
import { clientSideService } from "@clients/clientSideClient";



const UserForm = ({ data }: any) => {
    const [user, setUser] = useState({
        ...data
    })
    
    const changeHandler = (e: any) => {
        e.preventDefault();
        const {name, value} = e.target
        setUser({...user, [name]: value})
    }

    const { mutate } = useCreateUsersMutation(clientSideService,{
        onSuccess: (data: any) => {
            console.log(data, "User form generated User")
        },
    })


    const handleSubmit = (e: any) => {
        e.preventDefault();
        mutate(user);
    }
   
    return (
        <div className=" flex flex-col">
            <h2 className="text-center text-4xl pt-10" onSubmit={handleSubmit}>Add Users</h2>
            <form className=" flex flex-col items-center w-1/4 mx-auto content-center gap-6 pt-20">
            <input value={user.userName} name="userName" className=" border placeholder:italic placeholder:text-slate-400  bg-white w-full border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" type="text" placeholder="userName" onChange={changeHandler}/>
            <input value={user.userEmail} name="userEmail" className=" border placeholder:italic placeholder:text-slate-400  bg-white w-full border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" type="email" placeholder="userEmail" onChange={changeHandler}/>
            <select defaultValue={user.userGender} name="userGender" className=" border placeholder:italic placeholder:text-slate-400  bg-white w-full border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" onChange={changeHandler}>
	            <option value="none" selected>userGender</option>
	            <option value="male">Male</option>
	            <option value="female">Female</option>
	            <option value="other">other</option>
            </select>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center">Add user</button>
        </form>
        </div>
    )
}

export default UserForm;