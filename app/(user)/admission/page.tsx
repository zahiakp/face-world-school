import UserLayout from "@/components/layout/UserLayout";
import React from "react";
import Hero from "./Hero";
import Content from "./Content";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admission - FACE World Leadership School",
  description: "",
};

function page() {
  return (
    <UserLayout title="Admission" description="">
      <Hero />
      <Content />
    </UserLayout>
  );
}

export default page;
