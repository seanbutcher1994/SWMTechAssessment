import { FormatReadableDate } from "../utils/FormatReadableDate";

describe('FormatReadableDate', () => {
  it('formats a valid date string correctly', () => {
    // Arrange
    const dateString = '2023-09-08T14:30:00Z';

    // Act
    const formattedDate = FormatReadableDate(dateString);

    // Assert
    expect(formattedDate).toEqual('8 September 2023 at 10:30 pm');
  });

  it('returns an empty string for an invalid date string', () => {
    // Arrange
    const invalidDateString = 'invalid_date_string';

    // Act
    const formattedDate = FormatReadableDate(invalidDateString);

    // Assert
    expect(formattedDate).toEqual('Invalid Date');
  });
});
