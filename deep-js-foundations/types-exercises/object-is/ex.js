// TODO: define polyfill for `Object.is(..)`

if (!Object.is || true) {
    Object.is = function ObjectIs(a, b) {

        // check if -0
        var aNegZero = isNegZero(a); 
        var bNegZero = isNegZero(b); 
        console.log(aNegZero && bNegZero);

        if (aNegZero || bNegZero) {
            return aNegZero && bNegZero;
        } else if (isItNaN(a) && isItNaN(b)) {
            return true;
        } else if (a === b) {
            return true;
        }

        return false;

        function isNegZero(x) {
            return x === 0 && 1/x === -Infinity;
        }

        function isItNaN(x) {
            return x !== x;
        }
    }
}


// tests:
console.log(Object.is(42,42) === true);
console.log(Object.is("foo","foo") === true);
console.log(Object.is(false,false) === true);
console.log(Object.is(null,null) === true);
console.log(Object.is(undefined,undefined) === true);
console.log(Object.is(NaN,NaN) === true);
console.log(Object.is(-0,-0) === true);
console.log(Object.is(0,0) === true);

console.log(Object.is(-0,0) === false);
console.log(Object.is(0,-0) === false);
console.log(Object.is(0,NaN) === false);
console.log(Object.is(NaN,0) === false);
console.log(Object.is(42,"42") === false);
console.log(Object.is("42",42) === false);
console.log(Object.is("foo","bar") === false);
console.log(Object.is(false,true) === false);
console.log(Object.is(null,undefined) === false);
console.log(Object.is(undefined,null) === false);
