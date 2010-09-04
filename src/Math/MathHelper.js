var MathHelper = {};

MathHelper.zeroTolerance = 0.000001;

MathHelper.sin = function(v) {

    //TODO: At some point we can swap this out for a faster implementation
    return Math.sin(v);
}

MathHelper.asin = function(v) {
    return Math.asin(v);
}

MathHelper.cos = function(v) {
    return Math.cos(v);
}

MathHelper.acos = function(v) {
    return Math.acos(v);
}

MathHelper.sqrt = function(v) {
    return Math.sqrt(v);
}

MathHelper.invSqrt = function(v)
{
    return 1.0 / Math.sqrt(v);
}

MathHelper.fabs = function(v)
{
    return Math.fabs(v);
}