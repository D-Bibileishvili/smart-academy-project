"use client";
import { useForm } from "react-hook-form";
import styles from "./page.module.css";
import Link from "next/link";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { usePathname, useRouter } from "next/navigation";

const schema = yup.object().shape({
  firstName: yup
    .string()
    .required()
    .min(4)
    .max(20),

  lastName: yup
    .string()
    .required()
    .min(4)
    .max(20),

  age: yup
    .number()
    .typeError()
    .required()
    .min(13)
    .max(120),

  email: yup
    .string()
    .required()
    .email(),

  password: yup
    .string()
    .required()
    .min(6, )
    .max(12, )
    .matches(/[a-z]/)
    .matches(/[A-Z]/)
    .matches(/[0-9]/),

  phone: yup
    .string()
    .required()
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
      const response = await fetch("https://fakestoreapi.com/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

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
          {errors.id && <p>{errors.id.message}</p>}
        </div>

        <div className={styles.inputWrapper}>
          <label>Username: </label>
          <br />
          <input
            {...register("username")}
            className={styles.input}
            placeholder="username"
          />
          {errors.username && <p>{errors.username.message}</p>}
        </div>

        <div className={styles.inputWrapper}>
          <label>LastName: </label>
          <br />
          <input
            {...register("lastname")}
            className={styles.input}
            placeholder="lastname"
          />
          {errors.lastName && <p>{errors.lastName.message}</p>}
        </div>

        <div className={styles.inputWrapper}>
          <label>Age: </label>
          <br />
          <input
            {...register("age")}
            className={styles.input}
            placeholder="age"
          />
          {errors.age && <p>{errors.age.message}</p>}
        </div>

        <div className={styles.inputWrapper}>
          <label>Email: </label>
          <br />
          <input
            {...register("email")}
            className={styles.input}
            placeholder="email"
          />
          {errors.email && <p>{errors.email.message}</p>}
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
          {errors.password && <p>{errors.password.message}</p>}
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
          {errors.phone && <p>{errors.phone.message}</p>}
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
