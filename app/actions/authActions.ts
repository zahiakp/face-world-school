"use server";

import { cookies } from "next/headers";

export async function adminLogin(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const validEmail = "face@gmail.com";
  const validPass = "face@admin";
  const token = "face";

  if (email === validEmail && password === validPass) {
    const cookieStore = await cookies();
    cookieStore.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 7, // 1 week
      path: "/",
    });
    return { success: true };
  }

  return { success: false, error: "Invalid Email or Password" };
}
