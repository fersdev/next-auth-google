import { DefaultSession } from "next-auth"

export function UserCard( { user } : { user: DefaultSession["user"]}) {
    
    return (
        <div className="">
            <div className="">
                <p>Current Logged In User</p>
                <h5 className="">{user?.name}</h5>
                <p>{user?.email}</p>
            </div>
        </div>
    )
}