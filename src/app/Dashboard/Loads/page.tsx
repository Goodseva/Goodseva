"use client";

import React from "react";
import { Tabs, Typography } from "antd";
import type { TabsProps } from "antd";
import dynamic from "next/dynamic";

const Drafts = dynamic(() => import("@/app/components/Loads/Drafts/Drafts"));
const Posted = dynamic(() => import("@/app/components/Loads/Posted/Posted"));

const onChange = (key: string) => {
  console.log(key);
};
const items: TabsProps["items"] = [
  {
    key: "1",
    label: "Drafts",
    children: <Drafts />,
  },
  {
    key: "2",
    label: "Posted",
    children: <Posted />,
  },
  {
    key: "3",
    label: "Upcoming",
    children: "Content of Tab Pane 3",
  },
  {
    key: "4",
    label: "Running",
    children: "Content of Tab Pane 4",
  },
  {
    key: "5",
    label: "Completed",
    children: "Content of Tab Pane 5",
  },
  {
    key: "6",
    label: "Cancelled",
    children: "Content of Tab Pane 6",
  },
];

export default function Loads() {
  return (
    <div style={{ padding: 20 }}>
      <Typography.Text style={{ fontSize: 20, fontWeight: 600 }}>
        Loads
      </Typography.Text>
      <Tabs
        defaultActiveKey="1"
        items={items}
        onChange={onChange}
        style={{ width: "100%" }}
      />
    </div>
  );
}
