import UserLayout from "@/components/layout/UserLayout";
import React from "react";
import AdmissionForm from "./AdmissionForm";
import Hero from "../Hero";

export const metadata = {
  title: "Application Form - FACE Campus",
  description: "Apply for admission at FACE Campus",
};

function page() {
  return (
    <UserLayout title="Admission Form" description="">
      {/* <Hero /> */}
      <div className="py-4 md:py-14 bg-green-50 px-[5%] md:px-[15%]">
        <AdmissionForm />
      </div>
    </UserLayout>
  );
}

export default page;
