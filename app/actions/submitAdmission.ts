"use server";

import { prisma } from "@/lib/prisma";

export async function submitAdmission(data: any) {
  try {
    const admission = await prisma.admission.create({
      data: {
        name: data.name,
        dob: new Date(data.dob),
        gender: data.gender,
        place: data.place,
        fathersName: data.fathersName,
        fathersOccupation: data.fathersOccupation,
        mothersName: data.mothersName,
        mothersOccupation: data.mothersOccupation,
        address: data.address,
        contactNumber: data.contactNumber,
        whatsappNumber: data.whatsappNumber,
        school: data.school,
        examBoard: data.examBoard,
        examBoardOther: data.examBoardOther,
        madrasaEducation: data.madrasaEducation,
        madrasaBoard: data.madrasaBoard,
        interestedStream: data.interestedStream,
        achievements: data.achievements,
        talentsArts: data.talentsArts,
        talentsSports: data.talentsSports,
        favoriteLeader: data.favoriteLeader,
        roleModel: data.roleModel,
        lastReadBook: data.lastReadBook,
        ambition: data.ambition,
        muslimPriority: data.muslimPriority,
        optionalIbadath: data.optionalIbadath,
        technicalSkills: data.technicalSkills,
        socialMedia: data.socialMedia,
        youtubeHabits: data.youtubeHabits,
        sourceOfInfo: data.sourceOfInfo,
        visitedSocials: data.visitedSocials,
      },
    });

    return { success: true, data: admission };
  } catch (error) {
    console.error("Error submitting admission:", error);
    return { success: false, error: "Failed to submit admission application." };
  }
}
