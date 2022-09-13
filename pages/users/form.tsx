import React, { useState } from "react";
import { useCreateUsersMutation } from "src/graphql/generated/graphql";
import { clientSideService } from "@clients/clientSideClient";
import { GetStaticProps } from "next";
import { GetUsersDocument, GetUsersQuery } from "src/graphql/generated/graphql";
import { graphqlClient } from "@clients/graphqlClient";

function UserForm({ data }: any) {
  const [user, setUser] = useState({
    ...data,
  });

  const changeHandler = (e: any) => {
    e.preventDefault();
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const { mutate } = useCreateUsersMutation(clientSideService, {
    onSuccess: (data: any) => {
      console.log(data, "User form generated User");
    },
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    mutate(user);
  };

  return (
    <div className=" flex flex-col">
      <h2 className="pt-10 text-center text-4xl" onSubmit={handleSubmit}>
        Add Users
      </h2>
      <form className=" mx-auto flex w-1/4 flex-col content-center items-center gap-6 pt-20">
        <input
          value={user.userName}
          name="userName"
          className=" w-full rounded-md border border-slate-300 bg-white py-2 pl-3 pr-3 shadow-sm outline-none placeholder:italic placeholder:text-slate-400 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 sm:text-sm"
          type="text"
          placeholder="userName"
          onChange={changeHandler}
        />
        <input
          value={user.userEmail}
          name="userEmail"
          className=" w-full rounded-md border  border-slate-300 bg-white py-2 pl-3 pr-3 shadow-sm placeholder:italic placeholder:text-slate-400 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
          type="email"
          placeholder="userEmail"
          onChange={changeHandler}
        />
        <select
          name="userGender"
          className=" w-full rounded-md border  border-slate-300 bg-white py-2 pl-3 pr-3 shadow-sm placeholder:italic placeholder:text-slate-400 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
          onChange={changeHandler}
        >
          <option value="none" selected>
            userGender
          </option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">other</option>
        </select>
        <button className="rounded bg-blue-500 py-2 px-4 text-center font-bold text-white hover:bg-blue-700">
          Add user
        </button>
      </form>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const data: GetUsersQuery = await graphqlClient(GetUsersDocument);

    return {
      props: { data },
      revalidate: 21600,
    };
  } catch (error: any) {
    throw new Error(error);
  }
};

export default UserForm;
