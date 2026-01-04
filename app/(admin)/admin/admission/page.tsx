"use client";

import AdminLayout from "@/components/layout/AdminLayout";
import Content from "./Content";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";

function page() {
  return (
    <AdminLayout>
      <div className="p-5 md:p-5 md:px-10">
        <header className="mb-8">
          <Breadcrumb className="mb-4">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/admin">Dashboard</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Admission</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <h1 className="text-3xl font-semibold text-zinc-800">
            Admission <span className="text-green-200">Applications</span>
          </h1>
        </header>

        <Content />
      </div>
    </AdminLayout>
  );
}

export default page;
