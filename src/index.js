import numeral from 'numeral';
const num = numeral(1000).format('$0,0.00');
console.log(`I would pay ${num} for this awesome course`);
