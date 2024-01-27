import { UseQueryResult, useQuery } from "react-query";
import { User } from "@/models/User/User";
import { UserRequest } from "@/models/User/UserRequest";
import createDefaultUser from "@/models/User/DeafultUser";
import { UserProfile } from "@auth0/nextjs-auth0/client";

export function useUserEmail(email:string, user: UserRequest) : UseQueryResult<User, unknown>{
    return useQuery(['User', email], async () =>{
        const response = await fetch(`http://localhost:3001/user/email/${email}`);
        if(response.status == 500){ //change to the proper error. should be unique to user not posted
           PostUser(user);
        }
        const data = await response.json();
        return data
    })
}

 export function getUser(email:string | undefined): UseQueryResult<User, unknown>{
    return useQuery(['User',email], async ()=>{
             const response = await fetch(`http://localhost:3001/user/email/${email}`);
             const user = await response.json();
             return user;
    })
}

 export async function PostUser(user:UserRequest) {
    const response = await fetch('http://localhost:3001/user/create', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
    });
    const data = await response.json();
    return data;
 }