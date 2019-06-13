import leapYear from './index';

it('should not be a leap year if divisible by 100', () => {
    expect(leapYear(1900)).toBe(false);
})

it('should be a leap year if divisible by 400', () => {
    expect(leapYear(2000)).toBe(true);
})

it('should be a leap year if divisible by 4', () => {
    expect(leapYear(1984)).toBe(true);
})

it('should error if year is older than 1582', () => {
    expect(() => {
        leapYear(1568)
    }).toThrow();
})