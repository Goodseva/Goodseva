"use client";

import dynamic from "next/dynamic";

const LoginOtp1 = dynamic(() => import("../../components/loginotp/LoginOtp"));

export default function OtpPage() {
  return <LoginOtp1 />;
}
