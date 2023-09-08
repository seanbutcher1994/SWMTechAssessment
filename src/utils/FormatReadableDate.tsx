/**
 * Formats a date string into a readable format.
 *
 * @param dateString - The date string to format in ISO 8601 format.
 * @returns The formatted date string in the format "Month Day, Year, Hour:Minute AM/PM" or "Invalid Date" if the input is invalid.
 */
export const FormatReadableDate = (dateString: string): string => {
  try {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };

    return date.toLocaleString("en-AU", options);
  } catch (error) {
    return "Invalid Date";
  }
};
