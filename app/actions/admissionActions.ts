"use server";

import { prisma } from "@/lib/prisma";

export async function getAdmissions(params: {
  page: number;
  limit: number;
  search?: string;
  gender?: string;
  stream?: string;
}) {
  const { page, limit, search, gender, stream } = params;
  const skip = (page - 1) * limit;

  try {
    const where: any = {};

    if (search) {
      where.OR = [
        { name: { contains: search, mode: "insensitive" } },
        { contactNumber: { contains: search, mode: "insensitive" } },
        { school: { contains: search, mode: "insensitive" } },
      ];
    }

    if (gender) {
      where.gender = gender;
    }

    if (stream) {
      where.interestedStream = stream;
    }

    const [data, total] = await Promise.all([
      prisma.admission.findMany({
        where,
        skip,
        take: limit,
        orderBy: { createdAt: "desc" },
      }),
      prisma.admission.count({ where }),
    ]);

    return { success: true, data, total };
  } catch (error) {
    console.error("Error fetching admissions:", error);
    return { success: false, error: "Failed to fetch admissions" };
  }
}
