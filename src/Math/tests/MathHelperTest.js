module("Math::MathHelper");

test("sin", function() {
    equals(MathHelper.sin(2.1234567), Math.sin(2.1234567), "sin incorrect");
});

test("asin", function() {
    equals(MathHelper.asin(0.1234567), Math.asin(0.1234567), "asin incorrect");
});

test("cos", function() {
    equals(MathHelper.cos(2.1234567), Math.cos(2.1234567), "cos incorrect");
});

test("acos", function() {
    equals(MathHelper.acos(0.1234567), Math.acos(0.1234567), "acos incorrect");
});

test("sqrt", function() {
    equals(MathHelper.sqrt(2.1234567), Math.sqrt(2.1234567), "sqrt incorrect");
});

test("invSqrt", function() {
    equals(MathHelper.invSqrt(2.1234567), 1.0 / Math.sqrt(2.1234567), "invSqrt incorrect");
});

test("abs", function() {
    equals(MathHelper.abs(2.1234567), 2.1234567, "fabs positive incorrect");
    equals(MathHelper.abs(-4.1234567), 4.1234567, "fabs negative incorrect");
});