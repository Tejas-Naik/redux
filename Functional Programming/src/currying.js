const add = function(a) {
    return function(b) {
        return a + b;
    }
}

add(2)(3);

const add2 = a => b => a + b;
