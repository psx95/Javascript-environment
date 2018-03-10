// this is the appplication entry point as defined in the webpack's configuration
import './index.css';
import numeral from 'numeral';

const num = numeral(1000).format('$0,0.00');
//debugger; //  it is a breakpoint
console.log(`I would pay ${num} for this awesome course`);//eslint-disable-line no-console
// since we defined that our webpack should be able to handle all the css files as well, we need to 
// add line of code that will enable the webapack to handle the css code. This here is done by merely adding the import statemnet for the css file which we wish tpo handle
