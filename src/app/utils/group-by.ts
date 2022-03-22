// import * as _ from 'lodash';
import { groupBy } from 'lodash';

export function getGroupBy(myArray: any[]){
    return groupBy(myArray, ({date})=> new Date(date).getMonth());
} 

// const promp = (prop) => MOCK_FILTERED[prop].reduce(
//   (previousValue, currentValue) => previousValue + currentValue.amount,
// 0
// );

// const promp = (prop) => MOCK_FILTERED[prop].reduce(
//         (accumulator, currentValue) => {
//             return [
//                 Math.min(currentValue.amount , accumulator[0]), 
//                 Math.max(currentValue.amount , accumulator[1])
//             ];
//         }, [Number.MAX_VALUE, Number.MIN_VALUE]
//     );

// const promp = (prop) => MOCK_FILTERED[prop].reduce(
//     (accumulator, currentValue) => {
        
//             return  Math.min(currentValue.amount , accumulator) 
        
//     }, Number.MAX_VALUE
// );


// let myArr = [];
// values = Object.keys(MOCK_FILTERED);
// for (const prop in MOCK_FILTERED) {
// let data = { prop: prop, value: promp(prop)}
// myArr.push(data)
// }
// console.log('myArr', myArr)