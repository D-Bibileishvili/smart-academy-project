"use client";
import { useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { redirect } from "next/navigation";

const page = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleLogin = async (event) => {
    event.preventDefault();

    const response = await fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      body: JSON.stringify({
        username,
        password,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });

    const result = await response.json();

    if (result?.token) {
      redirect(`/products`);
    }
  };

  return (
    <main className={styles.main}>
      <form className={styles.container} onSubmit={handleLogin}>
        <h3 className={styles.signin}>Sign In</h3>
        <p className={styles.desc}>please sign in to access market.</p>
        <input
          className={styles.input}
          placeholder="username"
          onChange={(event) => setUsername(event.target.value)}
        />
        <input
          className={styles.input}
          type="password"
          placeholder="password"
          onChange={(event) => setPassword(event.target.value)}
        />
        <button className={styles.button} type="submit">
          Sign In
        </button>
        <Link href={"/signup/register"}>
          <button className={styles.notResgitered}>
            Not Registered? sign up
          </button>
        </Link>
      </form>
    </main>
  );
};

export default page;
