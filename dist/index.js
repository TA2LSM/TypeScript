"use strict";
let employee = {
    id: 1,
    name: 'Semih',
    retire: (date) => {
        console.log(date);
    },
};
function kgToLbs(weight) {
    if (typeof weight === 'number') {
        return weight * 2.2;
    }
    else
        return parseInt(weight) * 2.2;
}
console.log(kgToLbs(10));
console.log(kgToLbs('10kg'));
//# sourceMappingURL=index.js.map