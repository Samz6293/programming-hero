import { use } from "react";
import User from "./User";

const Users = ({userData}: any) => {

    const users: any = use(userData);
    console.log(users);

    return (
        <>
            <h1 className="text-center text-2xl font-bold">Users: {users.length}</h1>
            <div className="flex flex-wrap items-center">
                {
                    users.map((user: any) => <User user={user} key={user.id}></User>)
                }
            </div>
        </>
  )
}

export default Users