import dayjs from "dayjs";
import calendar from "dayjs/plugin/calendar";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(calendar);
dayjs.extend(utc);
dayjs.extend(timezone);

export { dayjs as date };
