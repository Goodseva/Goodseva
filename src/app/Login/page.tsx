"use client";

import dynamic from "next/dynamic";

const LoginPage1 = dynamic(() => import("../components/login/LoginPage"));

export default function LoginPage() {
  return <LoginPage1 />;
}
