import  { graphqlClient }  from "../../src/clients/graphqlClient";
import { GetStaticProps, NextPage } from "next";
import { GetUsersDocument, GetUsersQuery } from "src/graphql/generated/graphql";
import Link from "next/link";

const UserLists: NextPage = ({ data }: any) => {
    const users = data.users.map(({userId, userName, userEmail, userGender}: any) => {
        return (
            <div key={userId}>
                <h2 className="text-center">{userName} </h2>
                <h2 className="text-center w-1/5">{userEmail}</h2>
                <p className="text-center text-2xl">{userGender}</p>
            </div>
        )
    });
    
    return (
        <>
        <div className="flex flex-col gap-4 items-center content-center w-full h-80 pt-60">
            <h2>list of users</h2>
            {users}
            <Link href="/users/form">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center">Add User</button>
            </Link>
        </div>
        </>
    );

    
}

export const getStaticProps: GetStaticProps = async () => {
    try {
        const data: GetUsersQuery = await graphqlClient(GetUsersDocument);

        return {
           props: {data},
           revalidate: 21600
        }
    } catch (error: any) {
        throw new Error(error);
    }
}

export default UserLists;
