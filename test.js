// test.js

// Importamos las funciones desde app.js
const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

test("adds 14 + 9 to equal 23", () => {
    expect(sum(14, 9)).toBe(23);
});

test("One euro should be 1.07 dollars", () => {
    expect(fromEuroToDollar(1)).toBe(1.07);
});

test("Ten euros should be 10.7 dollars", () => {
    expect(fromEuroToDollar(10)).toBe(10.7);
});

test("One dollar should be approximately 146.26 yen", () => {
    expect(fromDollarToYen(1)).toBeCloseTo(146.26, 2);
});

test("Ten dollars should be approximately 1462.62 yen", () => {
    expect(fromDollarToYen(10)).toBeCloseTo(1462.62, 2);
});

test("One yen should be approximately 0.00556 pounds", () => {
    expect(fromYenToPound(1)).toBeCloseTo(0.00556, 2);
});

test("One hundred yen should be approximately 0.56 pounds", () => {
    expect(fromYenToPound(100)).toBeCloseTo(0.56, 2);
});
