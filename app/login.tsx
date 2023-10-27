"use client"
import { useSession, signIn, signOut } from "next-auth/react"
import { UserCard } from "./userCard";

export default function Login() {
    // ger session from NextAuth
    const { data: session } = useSession();
    console.log(session)
    // usession uses React Context

    // if the user exists -> show a Sign Out button and their information
    if(session) {
        return (
            <>
            <button type="button" onClick={() => signOut()} className="btn btn-primary">SignOut of Google</button>
            {/* Pass session info to server component */}
            <UserCard user={session?.user}/>
            </>
        )
    } else {
        return (
            <>
            <button type="button" onClick={() => signIn()} className="btn btn-primary">SignIn with Google</button>
            </>
        )
    }

}