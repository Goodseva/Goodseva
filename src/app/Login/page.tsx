"use client";

import dynamic from "next/dynamic";

const LoginPage1 = dynamic(() => import("../components/Login/LoginPage"));

export default function LoginPage() {
  return <LoginPage1 />;
}
