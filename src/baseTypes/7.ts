/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Days {
  MONDAY,
  TUESDAY,
  WENDSDAY,
  THURSDAY,
  FRIDAY,
  SARUTDAY,
  SUNDAY,
}

function isWeekend(day: Days): boolean {
  return day === Days.SARUTDAY || day === Days.SUNDAY;
} 