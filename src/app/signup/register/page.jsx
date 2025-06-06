"use client";
import { useForm } from "react-hook-form";
import styles from "./page.module.css";
import Link from "next/link";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { usePathname, useRouter } from "next/navigation";

const schema = yup.object().shape({
  id: yup.number().required("ID is required!").positive().integer(),
  username: yup.string().required("username is required!").min(4).max(20),

  lastname: yup.string().required("lastname is required!").min(4).max(20),

  age: yup.number().typeError().required("age is required!").min(13).max(120),

  email: yup.string().required("email is required!").email("Invalid Email"),

  password: yup
    .string()
    .required("password is required!")
    .min(6)
    .max(12)
    .matches(/[a-z]/)
    .matches(/[A-Z]/)
    .matches(/[0-9]/),

  phone: yup
    .string()
    .required("phone is required!")
    .matches(/^\d{10,100}$/),
});

const page = () => {
  const pathname = usePathname();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  const router = useRouter();

  const handleRegister = async (data) => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();

      if (result?.id) {
        reset();
        router.push("/products");
      }
    } catch (error) {
      throw new Error("User wasn't registered");
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Add New User</h2>
      <form onSubmit={handleSubmit(handleRegister)}>
        <div className={styles.inputWrapper}>
          <label>ID: </label>
          <br />
          <input
            {...register("id")}
            className={styles.input}
            placeholder="id"
          />
          {errors.id && <p className={styles.errorMessage}>{errors.id.message}</p>}
        </div>

        <div className={styles.inputWrapper}>
          <label>Username: </label>
          <br />
          <input
            {...register("username")}
            className={styles.input}
            placeholder="username"
          />
          {errors.username && <p className={styles.errorMessage}>{errors.username.message}</p>}
        </div>

        <div className={styles.inputWrapper}>
          <label>LastName: </label>
          <br />
          <input
            {...register("lastname")}
            className={styles.input}
            placeholder="lastname"
          />
          {errors.lastName && <p className={styles.errorMessage}>{errors.lastName.message}</p>}
        </div>

        <div className={styles.inputWrapper}>
          <label>Age: </label>
          <br />
          <input
            {...register("age")}
            className={styles.input}
            placeholder="age"
          />
          {errors.age && <p className={styles.errorMessage}>{errors.age.message}</p>}
        </div>

        <div className={styles.inputWrapper}>
          <label>Email: </label>
          <br />
          <input
            {...register("email")}
            className={styles.input}
            placeholder="email"
          />
          {errors.email && <p className={styles.errorMessage}>{errors.email.message}</p>}
        </div>

        <div className={styles.inputWrapper}>
          <label>Password: </label>
          <br />
          <input
            {...register("password")}
            className={styles.input}
            placeholder="password"
            type="password"
          />
          {errors.password && <p className={styles.errorMessage}>{errors.password.message}</p>}
        </div>

        <div className={styles.inputWrapper}>
          <label>Phone: </label>
          <br />
          <input
            {...register("phone")}
            className={styles.input}
            placeholder="phone"
            type="phone"
          />
          {errors.phone && <p className={styles.errorMessage}>{errors.phone.message}</p>}
        </div>
        <button className={styles.button} type="submit">
          Sign Up
        </button>
      </form>
      <Link href={"/signup/login"}>
        <button className={styles.notResgitered}>
          Already Registered? sign in
        </button>
      </Link>
    </div>
  );
};

export default page;
