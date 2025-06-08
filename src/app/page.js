"use client";
import Image from "next/image";
import styles from "./page.module.css";
import NavBar from "@/components/NavBar/NavBar";
import Link from "next/link";
import { useRouter, redirect } from "next/navigation";
import { RedirectType } from "next/navigation";
import { useEffect } from "react";
// import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const checkUser =  () => {
    const res =  localStorage.getItem('token');
    const token = JSON.parse(res)
    if (token === null) {
      redirect('/signup/login')
    }else{
      redirect('/products')
    }

  }

  useEffect(() => {
    checkUser()
    console.log(router.replace("/signup/login"));
  });
}
