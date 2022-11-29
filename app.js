const {flattenDeep} = require('lodash');

const items = [1, [2, [3, 4]]]
const newItems = flattenDeep(items);
console.log(newItems);