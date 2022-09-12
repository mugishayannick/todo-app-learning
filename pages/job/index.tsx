import { useState } from "react";
import styles from "../../styles/jobs.module.css";
import {
  useCreateJobsMutation,
} from "../../src/graphql/generated/graphql";
import { clientSideService } from "@clients/clientSideClient";

const GetJob = ({ data }: any) => {
  const [job, setJob] = useState({
   ...data
  });

  const changeHandler = (e: any) => {
    // setJob({ ...job, [e.target.name]: e.target.value });
    const {name, value} = e.target;
    setJob({ ...job, [name]: value});
    console.log(job);
  };
  

  const { mutate } = useCreateJobsMutation(clientSideService, {
    onSuccess: (data: any) => {
      console.log(data, "successfully generated job");
    },
    onError: (err: any) => {
      console.log("Error generating", err);
    },
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    mutate(job);
  };

  return (
    <>
      <form className={styles.form_input} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          name="title"
          value={job.title}
          type="text"
          placeholder="Title"
          onChange={changeHandler}
        />
        <input
          className={styles.input}
          name="salary"
          value={job.salary}
          type="number"
          placeholder="Salary"
          onChange={changeHandler}
        />
        <button type="submit" className={styles.button}>
          Submit
        </button>
      </form>
    </>
  );
}

export default GetJob;
