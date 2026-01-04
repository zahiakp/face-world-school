import { getAdmissions } from "@/app/actions/admissionActions";

export async function fetchAdmissionsPage(params: {
  page: number;
  limit: number;
  search?: string;
  gender?: string;
  stream?: string;
}) {
  return await getAdmissions(params);
}
