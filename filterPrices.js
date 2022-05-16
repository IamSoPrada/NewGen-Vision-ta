"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterByPrice = void 0;
let courses = [
    { name: 'Courses in England', prices: [0, 100] },
    { name: 'Courses in Germany', prices: [500, null] },
    { name: 'Courses in Italy', prices: [100, 200] },
    { name: 'Courses in Russia', prices: [null, 400] },
    { name: 'Courses in China', prices: [50, 250] },
    { name: 'Courses in USA', prices: [200, null] },
    { name: 'Courses in Kazakhstan', prices: [56, 324] },
    { name: 'Courses in France', prices: [null, null] },
];
const filterByPrice = (courses, filters) => {
    const filtersMin = filters[0];
    const filtersMax = filters[1];
    const arr = courses.filter(course => {
        const courseMin = course.prices[0];
        const courseMax = course.prices[1];
        if (filtersMin !== null &&
            filtersMax !== null &&
            courseMin !== null &&
            courseMax !== null) {
            return courseMin >= filtersMin && courseMax <= filtersMax;
        }
        else if (filtersMax === null) {
            return courseMin >= filtersMin;
        }
        else if (filtersMin === null) {
            return courseMax <= filtersMax && courseMin <= filtersMax;
        }
    });
    return arr;
};
exports.filterByPrice = filterByPrice;
let requiredRange1 = [null, 200];
let requiredRange2 = [100, 350];
let requiredRange3 = [200, null];
(0, exports.filterByPrice)(courses, requiredRange1); //?
(0, exports.filterByPrice)(courses, requiredRange2); //?
(0, exports.filterByPrice)(courses, requiredRange3); //?
