module("Math");
test("Rotation Test", function() {
        var m = Matrix4x4.createScale(1, 2, 3);
        var mx = Matrix4x4.rotateX(0.123);
	expect(1); //This expect is the number of asserts in the test.
	equals(mx.determinant(),1.0,"determinate should be one"); //Equals, ok are predefined functions.
});

/*
test("second test within module", function() {
  ok( true, "all pass" );
});

module("Module B");

test("some other test", function() {
  expect(2);
  equals( true, false, "failing test" );
  equals( true, true, "passing test" );
});
*/
