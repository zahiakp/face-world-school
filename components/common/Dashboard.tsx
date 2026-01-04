"use client";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import {
  TbClipboardList,
  TbLayoutDashboard,
  TbTransactionRupee,
} from "react-icons/tb";
import { PiNewspaperClippingBold } from "react-icons/pi";
import { HiOutlineCog } from "react-icons/hi";
import Link from "next/link";
import Image from "next/image";
import { FiCodesandbox } from "react-icons/fi";
import StyledButton from "./StyledButton";
import Logout from "./Logout";
import { MdFormatListBulletedAdd } from "react-icons/md";

function Dashboard() {
  const pathname = usePathname();

  interface Items {
    title: string;
    url: string;
    icon: ReactNode;
  }
  const NAV_ITEMS = [
    {
      title: "Dashboard",
      url: "/admin",
      icon: (
        <TbLayoutDashboard className="text-xl flex-shrink-0 w-5 h-5 mr-4" />
      ),
    },
    {
      title: "Admission",
      url: "/admin/admission",
      icon: (
        <MdFormatListBulletedAdd className="text-xl flex-shrink-0 w-5 h-5 mr-4" />
      ),
    }
  ];

  return (
    <div className="flex flex-1 bg-zinc-50/50">
      <div className="hidden md:flex md:w-72 md:flex-col">
        <div className="flex flex-col flex-grow overflow-y-auto bg-white md:w-72 fixed h-screen border-r border-zinc-100">
          <div className="flex items-center justify-center flex-shrink-0 py-20 pb-16 bg-green-light">
            <Image
              width={200}
              height={200}
              src="/images/logo green.png"
              alt="Logo"
              className="h-32 object-contain"
            />
          </div>

          <div className="flex flex-col flex-1 px-6 mt-12 pb-10">
            <div className="space-y-2">
              {NAV_ITEMS.map((item: Items, index: number) => (
                <Link
                  key={index}
                  href={item.url}
                  className={`${
                    item.url === pathname
                      ? "text-white bg-green-200"
                      : "text-zinc-800 hover:text-green-200 hover:bg-green/5"
                  } flex items-center px-4 py-3 text-sm font-medium transition-all duration-300 rounded-lg group`}
                >
                  <span
                    className={`${
                      item.url === pathname
                        ? "text-white"
                        : "text-zinc-800 group-hover:text-green"
                    } transition-colors duration-300`}
                  >
                    {item.icon}
                  </span>
                  {/* <StyledButton
                    text={item.title}
                    type={item.url === pathname ? "bold" : "medium"}
                  /> */}
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
          <Logout />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
