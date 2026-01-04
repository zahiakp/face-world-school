import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

export function getRelativeTime(date: string | Date) {
  return dayjs(date).fromNow();
}

export function formatDate(date: string | Date) {
  return dayjs(date).format("DD MMM YYYY");
}
