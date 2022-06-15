import { format } from 'date-fns';

const DATE_TIME_FORMAT = 'YYYY-MM-DD HH:mm';
const DATE_FORMAT = 'YYYY-MM-DD ';

export function formatToDateTime(date, formatStr = DATE_TIME_FORMAT): string {
  return format(date, formatStr);
}

export function formatToDate(date, formatStr = DATE_FORMAT): string {
  return format(date, formatStr);
}
