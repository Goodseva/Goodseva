"use client";

import dynamic from "next/dynamic";

const AddLoad = dynamic(() => import("../../components/postload/AddLoad"));
export default function PostLoad() {
  return <AddLoad />;
}
